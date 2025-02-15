import { FC } from 'react';
import BaseModal from '../../../../components/BaseModal';
import Button from '../../../../components/Button';
import TrashIcon from '../../../../icons/TrashIcon';

type Props = {
  isOpen: boolean;
  validations: Record<string, boolean>;
  handleCloseModal: VoidFunction;
  handleSubmitModal: VoidFunction;
};

const DeleteCardModal: FC<Props> = ({
  isOpen,
  validations,
  handleCloseModal,
  handleSubmitModal,
}) => {
  return (
    <BaseModal
      isOpen={isOpen}
      title="Delete Job data"
      handleCloseModal={handleCloseModal}
      isLoading={validations.updateTierIsLoading}
      width={350}
    >
      <div className="flex flex-col mt-4">
        <p className="text-base-custom text-[16px] text-center">
          Are you sure you want to delete this card?
        </p>
        <p className="text-base-custom text-[16px] text-center">
          The information cannot be recovered.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="gray"
            onClick={handleCloseModal}
            isLoading={validations.deleteCardIsLoading}
          >
            Back
          </Button>
          <Button
            variant="delete"
            endIcon={<TrashIcon />}
            onClick={handleSubmitModal}
            isLoading={validations.deleteCardIsLoading}
          >
            Delete
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default DeleteCardModal;
