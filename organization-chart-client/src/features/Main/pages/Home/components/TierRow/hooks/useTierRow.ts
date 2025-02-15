import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { TierData, TierSelected } from '../../../../../commons/types/Tier';
import useUpdateTier from '../infrastructure/hooks/useUpdateTier';

const useTierRow = ({ id, name, jobs }: TierData, position: number) => {
  const [countResize, setCountResize] = useState<'1' | '2' | '3'>('1');
  const [showUpdateTierModal, setShowUpdateTierModal] = useState(false);
  const [tierSelected, setTierSelected] = useState<TierSelected>({
    id,
    name,
  });
  const { setNodeRef } = useDroppable({
    id,
  });

  const newPosition: 'even' | 'odd' = (position + 1) % 2 === 0 ? 'even' : 'odd';

  const { handleUpdateTierIsLoading, handleUpdateTier } = useUpdateTier();

  const handleShowUpdateTierModal = () => {
    setShowUpdateTierModal(true);
  };

  const handleCloseUpdateTierModal = () => {
    setShowUpdateTierModal(false);
  };

  const handleSetTierSelected = (tier: TierSelected) => {
    setTierSelected(tier);
  };

  const handleSubmit = (newTier: TierSelected) => {
    handleUpdateTier({
      tierId: tierSelected.id,
      payload: {
        name: newTier.name,
      },
      callback: handleCloseUpdateTierModal,
    });
  };

  const handleAddResize = () => {
    const resizeNumber = parseInt(countResize);
    const newResize = Math.min(resizeNumber + 1, 3);
    setCountResize(newResize.toString() as '1' | '2' | '3');
  };

  const handleRestResize = () => {
    const resizeNumber = parseInt(countResize);
    const newResize = Math.max(resizeNumber - 1, 1);
    setCountResize(newResize.toString() as '1' | '2' | '3');
  };

  const validations = {
    tierNameValidLength: tierSelected?.name.length <= 20,
    updateTierIsLoading: handleUpdateTierIsLoading,
  };

  return {
    countResize,
    showUpdateTierModal,
    tierSelected,
    name,
    jobs,
    newPosition,
    validations,
    setNodeRef,
    handleShowUpdateTierModal,
    handleCloseUpdateTierModal,
    handleSetTierSelected,
    handleSubmit,
    handleAddResize,
    handleRestResize,
  };
};

export default useTierRow;
