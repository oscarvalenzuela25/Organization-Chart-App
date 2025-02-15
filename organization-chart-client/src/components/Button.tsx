import React, { ButtonHTMLAttributes, FC } from 'react';
import { TailwindUtils } from '../utils/TailwindUtils';
import { cva } from 'class-variance-authority';
import Spinner from './Spinner';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'delete' | 'gray';
  /**
   * The loading state of the button
   */
  isLoading?: boolean;
  /**
   * The start icon of the button
   */
  startIcon?: React.ReactNode;
  /**
   * The end icon of the button
   */
  endIcon?: React.ReactNode;
};

const buttonVariants = cva(
  'flex justify-center items-center gap-1  px-6 py-2 rounded-full min-w-[110px] cursor-pointer text-[12px] font-medium focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-blue-custom text-white-custom hover:bg-blue-custom/85 focus:bg-blue-custom/85',
        gray: 'bg-gray-dark-custom text-white-custom hover:bg-gray-dark-custom/85 focus:bg-gray-dark-custom/85',
        delete:
          'bg-red-custom text-white-custom hover:bg-red-custom/85 focus:bg-red-custom/85',
      },
      isLoading: {
        true: '',
        false: '',
      },
      isDisabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
    compoundVariants: [
      {
        variant: 'primary',
        isLoading: true,
        className: 'bg-blue-custom/85 text-white-custom/85',
      },
      {
        variant: 'gray',
        isLoading: true,
        className: 'bg-gray-dark-custom/85 text-white-custom/85',
      },
      {
        variant: 'delete',
        isLoading: true,
        className: 'bg-red-custom/85 text-white-custom/85',
      },
    ],
  }
);

const Button: FC<Props> = ({
  variant,
  isLoading,
  startIcon,
  endIcon,
  children,
  className,
  disabled,
  ...props
}) => {
  const classes = TailwindUtils.cn(
    buttonVariants({ variant, isLoading, isDisabled: disabled }),
    className
  );

  return (
    <button className={classes} {...props} disabled={disabled || isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {startIcon} {children} {endIcon}
        </>
      )}
    </button>
  );
};

export default Button;
