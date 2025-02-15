import { FC } from 'react';
import { cva } from 'class-variance-authority';

type Props = {
  variant?:
    | 'base'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'base' | 'grayDarkCustom';
};

const SpinnerVariant = cva('loading loading-spinner', {
  variants: {
    variant: {
      base: '',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      neutral: 'text-neutral',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
    },
    size: {
      xs: 'loading-xs',
      sm: 'loading-sm',
      md: 'loading-md',
      lg: 'loading-lg',
    },
    color: {
      base: '',
      grayDarkCustom: 'text-gray-dark-custom',
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'sm',
    color: 'base',
  },
});

const Spinner: FC<Props> = ({
  variant = 'base',
  size = 'sm',
  color = 'base',
}) => {
  const classes = SpinnerVariant({ variant, size, color });
  return <span className={classes}></span>;
};

export default Spinner;
