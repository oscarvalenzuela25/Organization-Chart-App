import { FC } from 'react';
import UpdateIcon from '../../../../../../icons/UpdateIcon';
import IconButton from '../../../../../../components/IconButton';
import { cva } from 'class-variance-authority';
import Card from '../Card';
import { TierData } from '../../../../commons/types/Tier';
import UpdateTierModal from '../../../../commons/components/UpdateTierModal';
import useTierRow from './hooks/useTierRow';
import ButtonZoom from '../../../../commons/components/ButtonZoom';

type Props = {
  data: TierData;
  position: number;
};

const rowReziseVariant = cva('flex w-full transition-all duration-300', {
  variants: {
    resize: {
      '1': 'min-h-[33.3vh]',
      '2': 'min-h-[66.6vh]',
      '3': 'min-h-[100vh]',
    },
  },
});

const rowBodyVariant = cva(
  'flex justify-center items-center w-full min-h-full p-3 flex-wrap gap-20 scrollbar-thin',
  {
    variants: {
      position: {
        odd: 'bg-gray-custom',
        even: 'bg-gray-light-custom',
      },
    },
    defaultVariants: {
      position: 'odd',
    },
  }
);

const TierRow: FC<Props> = ({ data, position }) => {
  const {
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
  } = useTierRow(data, position);
  const rowBodyClasses = rowBodyVariant({ position: newPosition });
  const rowReziseClasses = rowReziseVariant({ resize: countResize });

  return (
    <>
      <div ref={setNodeRef} className={rowReziseClasses}>
        <div className="flex flex-col items-center justify-center bg-gray-dark-custom border-2 border-gray-dark-custom border-b-white-custom p-3 gap-2">
          <IconButton
            className="rotate-270"
            onClick={() => {
              handleSetTierSelected({
                id: data.id,
                name: data.name,
              });
              handleShowUpdateTierModal();
            }}
          >
            <UpdateIcon className="stroke-dark-custom" />
          </IconButton>

          <p className="flex items-center flex-nowrap text-white-custom font-[16px] font-medium uppercase writing-mode-vertical-rl cursor-default">
            {name}
          </p>
        </div>

        <div className={rowBodyClasses}>
          {jobs.map(job => (
            <Card key={job.id} job={job} tierPosition={position + 1} />
          ))}
        </div>

        <div className="absolute right-5 mt-5 flex flex-col items-center justify-center gap-4">
          <ButtonZoom type="zoomIn" onClick={handleAddResize} />
          <ButtonZoom type="zoomOut" onClick={handleRestResize} />
        </div>
      </div>

      {showUpdateTierModal && (
        <UpdateTierModal
          isOpen={showUpdateTierModal}
          tierSelected={tierSelected}
          validations={validations}
          handleCloseModal={handleCloseUpdateTierModal}
          handleSubmitModal={handleSubmit}
        />
      )}
    </>
  );
};

export default TierRow;
