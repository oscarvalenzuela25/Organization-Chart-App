import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Candidate } from '../../../../types/jobs';
import updateUsers from '../service/updateUsers';

type Args = {
  jobId: number;
  payload: Array<Candidate>;
  callback: VoidFunction;
};

const useUpdateUsers = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: handleUpdateUsers } = useMutation({
    mutationFn: ({ jobId, payload }: Args) => updateUsers(jobId, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['getTierData'],
        exact: false,
      });
      variables.callback();
      toast.success('Users added/updated successfully');
    },
    onError: () => {
      toast.error('Error adding/updating users data');
    },
  });

  return {
    handleUpdateUsers,
    handleUpdateUsersIsLoading: isPending,
  };
};

export default useUpdateUsers;
