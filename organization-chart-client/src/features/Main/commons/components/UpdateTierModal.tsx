import { FC, KeyboardEvent } from 'react';
import BaseModal from '../../../../components/BaseModal';
import { TierSelected } from '../types/Tier';
import Button from '../../../../components/Button';
import SendIcon from '../../../../icons/SendIcon';
import { cva } from 'class-variance-authority';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  isOpen: boolean;
  tierSelected: TierSelected;
  validations: Record<string, boolean>;
  handleCloseModal: VoidFunction;
  handleSubmitModal: (tierSelected: TierSelected) => void;
};

const inputVariant = cva('w-full px-4 py-3 rounded-xl border-2 outline-none', {
  variants: {
    valid: {
      true: 'border-black-translucent-custom focus:border-blue-custom',
      false: 'border-red-custom/60 focus:border-red-custom',
    },
  },
  defaultVariants: {
    valid: true,
  },
});

const tierSchema = z.object({
  name: z
    .string()
    .max(20, 'Name cannot be longer than 20 characters')
    .nonempty('Name is required'),
});

const UpdateTierModal: FC<Props> = ({
  isOpen,
  tierSelected,
  validations,
  handleCloseModal,
  handleSubmitModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TierSelected>({
    resolver: zodResolver(tierSchema),
    defaultValues: {
      name: tierSelected.name,
    },
  });
  const onSubmit = handleSubmit((tierSelected: TierSelected) =>
    handleSubmitModal(tierSelected)
  );
  const nameError = errors.name?.message;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      title="Update Tier name"
      handleCloseModal={handleCloseModal}
      isLoading={validations.updateTierIsLoading}
      width={450}
    >
      <form onSubmit={onSubmit}>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="name"
            className="text-[12px] font-medium text-base-custom/80"
          >
            Tier name
          </label>
          <input
            type="text"
            id="name"
            className={inputVariant({ valid: !nameError })}
            placeholder="Enter new tier name"
            {...register('name')}
            disabled={validations.updateTierIsLoading}
            onKeyDown={handleKeyDown}
          />
          {nameError && (
            <span className="text-[12px] font-bold text-red-custom">
              {nameError}
            </span>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="gray"
            onClick={handleCloseModal}
            isLoading={validations.updateTierIsLoading}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="submit"
            endIcon={<SendIcon />}
            isLoading={validations.updateTierIsLoading}
          >
            Update
          </Button>
        </div>
      </form>
    </BaseModal>
  );
};

export default UpdateTierModal;
