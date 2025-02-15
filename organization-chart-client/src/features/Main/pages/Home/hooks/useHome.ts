import { DragEndEvent } from '@dnd-kit/core';
import useGetTierData from '../infrastructure/hooks/useGetTierData';
import useUpdateCard from '../../../commons/insfrastructure/hooks/useUpdateCard';

const useHome = () => {
  const { tierData, getTierDataIsLoading, getTierDataIsFetching } =
    useGetTierData();

  const { handleUpdateCard, handleUpdateCardIsLoading } = useUpdateCard();

  const handleOnDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const cardId = active.id as number;
    const tierId = over?.id as number;
    handleUpdateCard({
      jobId: cardId,
      payload: {
        tierId,
      },
      callback: () => undefined,
    });
  };

  return {
    tierData,
    getTierDataIsLoading,
    getTierDataIsFetching,
    handleUpdateCardIsLoading,
    handleOnDragEnd,
  };
};

export default useHome;
