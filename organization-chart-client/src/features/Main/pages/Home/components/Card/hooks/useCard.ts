import { useState } from 'react';
import { Job } from '../../../../../commons/types/jobs';
import { useDraggable } from '@dnd-kit/core';
import useGetDivisions from '../infrastructure/hooks/useGetDivisions';
import useDeleteCard from '../infrastructure/hooks/useDeleteCard';
import useAddCard from '../infrastructure/hooks/useAddCard';
import useUpdateCard from '../../../../../commons/insfrastructure/hooks/useUpdateCard';

const jobDefault: Job = {
  id: 0,
  name: '',
  tierId: 0,
  openings: 0,
  candidates: [],
  division: { id: 0, name: '' },
  relations: [],
};
const useCard = (job: Job) => {
  const [showUpdateCardModal, setShowUpdateCardModal] = useState(false);
  const [showDeleteCardModal, setShowDeleteCardModal] = useState(false);
  const [showUpdateUsersModal, setShowUpdateUsersModal] = useState(false);
  const [jobSelected, setJobSelected] = useState(jobDefault);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  const { divisionsList, getDivisionsIsFetching } =
    useGetDivisions(showUpdateCardModal);

  const { handleUpdateCard, handleUpdateCardIsLoading } = useUpdateCard();
  const { handleDeleteCard, handleDeleteCardIsLoading } = useDeleteCard();
  const { handleAddCard, handleAddCardIsLoading } = useAddCard();

  const handleShowUpdateCardModal = () => {
    setShowUpdateCardModal(true);
  };

  const handleCloseUpdateCardModal = () => {
    setShowUpdateCardModal(false);
  };

  const handleShowDeleteCardModal = () => {
    setShowDeleteCardModal(true);
  };

  const handleCloseDeleteCardModal = () => {
    setShowDeleteCardModal(false);
  };

  const handleShowUpdateUsersModal = () => {
    setShowUpdateUsersModal(true);
  };

  const handleCloseUpdateUsersModal = () => {
    setShowUpdateUsersModal(false);
  };

  const handleSetJobSelected = (job: Job) => {
    setJobSelected(job);
  };

  const handleSubmitUpdateCard = (job: Job) => {
    handleUpdateCard({
      jobId: jobSelected.id,
      payload: {
        name: job.name,
        openings: job.openings,
        divisionId: job?.division?.id,
      },
      callback: handleCloseUpdateCardModal,
    });
  };

  const handleSubmitDeleteCard = () => {
    handleDeleteCard({
      jobId: jobSelected.id,
      callback: handleCloseDeleteCardModal,
    });
  };

  const handleSubmitAddCard = () => {
    handleAddCard({
      payload: {
        tierId: job.tierId,
        jobParentId: job.id,
      },
    });
  };

  const validations = {
    updateCardIsLoading: getDivisionsIsFetching || handleUpdateCardIsLoading,
    deleteCardIsLoading: handleDeleteCardIsLoading,
    addCardIsLoading: handleAddCardIsLoading,
  };

  return {
    attributes,
    listeners,
    setNodeRef,
    style,
    showUpdateCardModal,
    jobSelected,
    divisionsList,
    showDeleteCardModal,
    showUpdateUsersModal,
    validations,
    handleShowUpdateCardModal,
    handleCloseUpdateCardModal,
    handleShowDeleteCardModal,
    handleCloseDeleteCardModal,
    handleShowUpdateUsersModal,
    handleCloseUpdateUsersModal,
    handleSetJobSelected,
    handleSubmitUpdateCard,
    handleSubmitDeleteCard,
    handleSubmitAddCard,
  };
};

export default useCard;
