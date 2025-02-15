import { FC, PropsWithChildren } from 'react';
import IconButton from './IconButton';
import CloseIcon from '../icons/CloseIcon';

type Props = {
  isOpen: boolean;
  title: string;
  width?: number;
  isLoading?: boolean;
  handleCloseModal: VoidFunction;
} & PropsWithChildren;

const BaseModal: FC<Props> = ({
  isOpen,
  title,
  width,
  isLoading,
  children,
  handleCloseModal,
}) => {
  const minWidth = width || 400;
  return (
    <dialog
      className="modal bg-black-translucent-custom flex justify-center"
      open={isOpen}
    >
      <div
        style={{
          minWidth,
        }}
        className={
          'flex flex-col p-5 bg-white-custom animate-fade-up animate-once rounded-xl text-base-custom'
        }
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-[20px] font-medium text-base-custom">{title}</p>
          <IconButton onClick={handleCloseModal} disabled={isLoading}>
            <CloseIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </dialog>
  );
};

export default BaseModal;
