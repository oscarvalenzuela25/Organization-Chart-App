import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  scale?: number;
  className?: string;
};

const PlusCircleIcon: FC<Props> = ({ width, height, scale, className }) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
        clipRule="evenodd"
        transform={`scale(${scale})`}
      />
    </svg>
  );
};

export default PlusCircleIcon;
