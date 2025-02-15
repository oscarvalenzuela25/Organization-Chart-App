import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const CloseIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10l4 4m0 -4l-4 4" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
    </svg>
  );
};

export default CloseIcon;
