import { FC } from 'react';
import { cva } from 'class-variance-authority';
import IconButton from '../../../../../../components/IconButton';
import TrashIcon from '../../../../../../icons/TrashIcon';
import UpdateIcon from '../../../../../../icons/UpdateIcon';
import TierIcon from '../../../../commons/components/TierIcon';
import PlusCircleIcon from '../../../../../../icons/PlusCircleIcon';
import { Job } from '../../../../commons/types/jobs';
import UsersIcon from '../../../../../../icons/UsersIcon';
import UpdateCardModal from '../../../../commons/components/UpdateCardModal';
import useCard from './hooks/useCard';
import DeleteCardModal from '../../../../commons/components/DeleteCardModal';
import Spinner from '../../../../../../components/Spinner';
import UpdateUsersModal from '../../../../commons/components/UpdateUsersModal';

const textOpeningsVariant = cva('text-[12px] underline leading-[1]', {
  variants: {
    candidates: {
      filled: 'text-base-custom/90',
      empty: 'text-red-custom',
    },
  },
  defaultVariants: {
    candidates: 'empty',
  },
});

type Props = {
  job: Job;
  tierPosition: number;
};

const Card: FC<Props> = ({ job, tierPosition }) => {
  const {
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
  } = useCard(job);

  const candidates = job.candidates.length;
  const classesTextOpenings = textOpeningsVariant({
    candidates: candidates === job.openings ? 'filled' : 'empty',
  });

  return (
    <div className="flex flex-col items-center gap-2" style={style}>
      <div className="flex flex-col w-[200px] rounded-lg shadow-lg">
        <div
          className="flex flex-col items-center w-full bg-white px-3 py-2 rounded-t-lg"
          ref={setNodeRef}
          {...listeners}
          {...attributes}
        >
          <div className="flex justify-between w-full h-full">
            <input
              type="checkbox"
              disabled
              className="checkbox bg-gray-custom"
            />
            <TierIcon tierLevel={tierPosition} />
          </div>

          <p className="text-[20px] font-bold pt-3 pb-3 text-base-custom text-center">
            {job.name}
          </p>

          <div className="flex flex-col w-full">
            <label className="text-base-custom/70 text-[10px]">Openings</label>
            <p className={classesTextOpenings}>
              {candidates}/{job.openings} employees
            </p>
          </div>

          <p className="mt-2 text-[16px] text-base-custom/70">
            {job.division.name}
          </p>
        </div>

        <div className="flex justify-end px-2 py-1 bg-gray-custom/70 gap-1 rounded-b-lg">
          <div className="tooltip" data-tip="Update users">
            <IconButton
              onClick={() => {
                handleSetJobSelected(job);
                handleShowUpdateUsersModal();
              }}
            >
              <UsersIcon className="stroke-dark-custom" />
            </IconButton>
          </div>

          <div className="tooltip" data-tip="Update job">
            <IconButton
              onClick={() => {
                handleSetJobSelected(job);
                handleShowUpdateCardModal();
              }}
            >
              <UpdateIcon className="stroke-dark-custom" />
            </IconButton>
          </div>

          <div className="tooltip" data-tip="Delete job">
            <IconButton
              onClick={() => {
                handleSetJobSelected(job);
                handleShowDeleteCardModal();
              }}
            >
              <TrashIcon className="fill-dark-custom" />
            </IconButton>
          </div>
        </div>
      </div>

      <IconButton onClick={handleSubmitAddCard}>
        <div className="flex items-center justify-center size-[47px]">
          {validations.addCardIsLoading ? (
            <Spinner size="lg" color="grayDarkCustom" />
          ) : (
            <PlusCircleIcon
              width={47}
              height={47}
              scale={2}
              className="fill-gray-dark-custom"
            />
          )}
        </div>
      </IconButton>

      {showUpdateCardModal && (
        <UpdateCardModal
          isOpen={showUpdateCardModal}
          jobSelected={jobSelected}
          validations={validations}
          divisionsList={divisionsList}
          handleCloseModal={handleCloseUpdateCardModal}
          handleSubmitModal={handleSubmitUpdateCard}
        />
      )}

      {showDeleteCardModal && (
        <DeleteCardModal
          isOpen={showDeleteCardModal}
          validations={validations}
          handleCloseModal={handleCloseDeleteCardModal}
          handleSubmitModal={handleSubmitDeleteCard}
        />
      )}

      {showUpdateUsersModal && (
        <UpdateUsersModal
          isOpen={showUpdateUsersModal}
          jobSelected={jobSelected}
          handleCloseModal={handleCloseUpdateUsersModal}
        />
      )}
    </div>
  );
};

export default Card;
