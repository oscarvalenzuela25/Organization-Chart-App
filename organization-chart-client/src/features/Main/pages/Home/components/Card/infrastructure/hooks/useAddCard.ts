import { useMutation, useQueryClient } from '@tanstack/react-query';
import { jobDataToCreated } from '../../../../../../commons/types/jobs';
import { toast } from 'sonner';
import addCard from '../service/addCard';

type Args = {
  payload: jobDataToCreated;
};

const useAddCard = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: handleAddCard } = useMutation({
    mutationFn: ({ payload }: Args) => addCard(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getTierData'],
        exact: false,
      });
      toast.success('Job data added successfully');
    },
    onError: () => {
      toast.error('Error adding job data');
    },
  });

  return {
    handleAddCard,
    handleAddCardIsLoading: isPending,
  };
};

export default useAddCard;
