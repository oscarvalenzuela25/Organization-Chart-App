import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import deleteCard from '../service/deleteCard';

type Args = {
  jobId: number;
  callback: () => void;
};

const useDeleteCard = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: handleDeleteCard } = useMutation({
    mutationFn: ({ jobId }: Args) => deleteCard(jobId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['getTierData'],
        exact: false,
      });
      variables.callback();
      toast.success('Job data delete successfully');
    },
    onError: () => {
      toast.error('Error deleting job data');
    },
  });

  return {
    handleDeleteCard,
    handleDeleteCardIsLoading: isPending,
  };
};

export default useDeleteCard;
