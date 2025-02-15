import { useQuery } from '@tanstack/react-query';
import getUsers from '../service/getUsers';

const useGetUsers = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsers,
  });

  return {
    users: data,
    getUsersIsSuccess: isSuccess,
    getUsersIsLoading: isLoading,
    getUsersIsFetching: isFetching,
  };
};

export default useGetUsers;
