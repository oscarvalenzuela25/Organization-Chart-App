import { FC, KeyboardEvent } from 'react';
import BaseModal from '../../../../components/BaseModal';
import { Division, Job } from '../types/jobs';
import Button from '../../../../components/Button';
import SendIcon from '../../../../icons/SendIcon';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cva } from 'class-variance-authority';

type Props = {
  isOpen: boolean;
  jobSelected: Job;
  divisionsList: Array<Division>;
  validations: Record<string, boolean>;
  handleCloseModal: VoidFunction;
  handleSubmitModal: (job: Job) => void;
};

const inputVariantClass = cva(
  'w-full px-4 py-3 rounded-xl border-2 outline-none',
  {
    variants: {
      valid: {
        true: 'border-black-translucent-custom focus:border-blue-custom',
        false: 'border-red-custom/60 focus:border-red-custom',
      },
    },
    defaultVariants: {
      valid: true,
    },
  }
);

const jobSchema = z.object({
  name: z
    .string()
    .max(30, 'Name cannot be longer than 30 characters')
    .nonempty('Name is required'),
  openings: z
    .number()
    .min(0, 'Openings cannot be less than 0')
    .max(999, 'Openings cannot be more than 999'),
  division: z.object({
    id: z.string().nonempty('Division is required'),
  }),
});

const UpdateCardModal: FC<Props> = ({
  isOpen,
  jobSelected,
  divisionsList,
  validations,
  handleCloseModal,
  handleSubmitModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Job>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      name: jobSelected.name,
      openings: jobSelected.openings,
      division: jobSelected.division,
    },
  });
  const onSubmit = handleSubmit((job: Job) => handleSubmitModal(job));
  const nameError = errors.name?.message;
  const openingsError = errors.openings?.message;
  const divisionError = errors.division?.message;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Update Job data"
      handleCloseModal={handleCloseModal}
      isLoading={validations.updateTierIsLoading}
      width={400}
    >
      <form onSubmit={onSubmit}>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="name"
            className="text-[12px] font-medium text-base-custom/80"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={inputVariantClass({ valid: !nameError })}
            placeholder="Enter new job name"
            disabled={validations.updateCardIsLoading}
            onKeyDown={handleKeyDown}
            {...register('name', { required: true })}
          />
          {!!nameError && (
            <span className="text-[12px] font-bold text-red-custom">
              {nameError}
            </span>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="openings"
              className="text-[12px] font-medium text-base-custom/80"
            >
              Openings
            </label>
            <input
              type="number"
              id="openings"
              className={inputVariantClass({ valid: !openingsError })}
              {...register('openings', { valueAsNumber: true })}
              onKeyDown={handleKeyDown}
              disabled={validations.updateCardIsLoading}
            />
            {!!openingsError && (
              <span className="text-[12px] font-bold text-red-custom">
                {openingsError}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="division"
              className="text-[12px] font-medium text-base-custom/80"
            >
              Divisions
            </label>
            <select
              id="division"
              className={inputVariantClass({ valid: !divisionError })}
              {...register('division.id')}
              disabled={validations.updateCardIsLoading}
              onKeyDown={handleKeyDown}
            >
              {divisionsList.map(division => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
            {!!divisionError && (
              <span className="text-[12px] font-bold text-red-custom">
                {divisionError}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="gray"
            onClick={handleCloseModal}
            isLoading={validations.updateCardIsLoading}
          >
            Back
          </Button>
          <Button
            variant="primary"
            endIcon={<SendIcon />}
            type="submit"
            isLoading={validations.updateCardIsLoading}
          >
            Update
          </Button>
        </div>
      </form>
    </BaseModal>
  );
};

export default UpdateCardModal;
