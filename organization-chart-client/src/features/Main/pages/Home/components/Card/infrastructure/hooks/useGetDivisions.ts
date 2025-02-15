import getDivisions from '../service/getDivisions';
import { useQuery } from '@tanstack/react-query';

const useGetDivisions = (enabled: boolean) => {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['getDivisions'],
    queryFn: getDivisions,
    enabled,
  });

  return {
    divisionsList: data,
    getDivisionsIsLoading: isLoading,
    getDivisionsIsFetching: isFetching,
  };
};

export default useGetDivisions;
