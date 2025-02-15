import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import updateCard from '../service/updateCard';
import { JobDataToUpdate } from '../../types/jobs';
import { TierData } from '../../types/Tier';

type Args = {
  jobId: number;
  payload: JobDataToUpdate;
  callback: () => void;
};

const useUpdateCard = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: handleUpdateCard } = useMutation({
    mutationFn: ({ jobId, payload }: Args) => updateCard(jobId, payload),
    onSuccess: (_, variables) => {
      variables.callback();
      toast.success('Job data updated successfully');
    },
    onMutate: async ({ jobId, payload }: Args) => {
      if (payload.tierId) {
        await queryClient.cancelQueries({ queryKey: ['getTierData'] });

        const previousTierData = queryClient.getQueryData<TierData[]>([
          'getTierData',
        ]);

        queryClient.setQueryData<TierData[]>(['getTierData'], old => {
          if (!old) return [];

          const newTierData = old.map(tier => {
            const jobIndex = tier.jobs.findIndex(job => job.id === jobId);
            if (jobIndex !== -1) {
              const job = tier.jobs[jobIndex];
              tier.jobs.splice(jobIndex, 1);
              const targetTier = old.find(t => t.id === payload.tierId);
              if (targetTier) {
                targetTier.jobs.push({ ...job, tierId: payload.tierId || 0 });
              }
            }
            return tier;
          });

          return newTierData;
        });

        return { previousTierData };
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['getTierData'],
        exact: false,
      });
    },
    onError: () => {
      toast.error('Error updating job data');
    },
  });

  return {
    handleUpdateCard,
    handleUpdateCardIsLoading: isPending,
  };
};

export default useUpdateCard;
