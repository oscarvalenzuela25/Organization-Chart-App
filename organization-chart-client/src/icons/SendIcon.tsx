import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const SendIcon: FC<Props> = ({ width, height, className }) => {
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
      <path d="M10 14l11 -11" />
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  );
};

export default SendIcon;
