import { useQuery } from '@tanstack/react-query';
import getTierData from '../service/getTierData';

const useGetTierData = () => {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['getTierData'],
    queryFn: getTierData,
  });

  return {
    tierData: data,
    getTierDataIsLoading: isLoading,
    getTierDataIsFetching: isFetching,
  };
};

export default useGetTierData;
