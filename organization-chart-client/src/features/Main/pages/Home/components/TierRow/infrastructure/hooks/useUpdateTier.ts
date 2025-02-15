import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { TierDataToUpdate } from '../../../../../../commons/types/Tier';
import updateTier from '../service/updateTier';

type Args = {
  tierId: number;
  payload: TierDataToUpdate;
  callback: () => void;
};
const useUpdateTier = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleUpdateTier } = useMutation({
    mutationFn: ({ tierId, payload }: Args) => updateTier(tierId, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['getTierData'],
        exact: false,
      });
      variables.callback();
      toast.success('Tier name updated successfully');
    },
    onError: () => {
      toast.error('Error updating tier name');
    },
  });

  return {
    handleUpdateTierIsLoading: isPending,
    handleUpdateTier,
  };
};

export default useUpdateTier;
