import { FC } from 'react';
import { TailwindUtils } from '../../../../utils/TailwindUtils';

type Props = {
  type: 'zoomIn' | 'zoomOut';
  className?: string;
  onClick: VoidFunction;
};

const ButtonZoom: FC<Props> = ({ type, className, onClick }) => {
  const classees = TailwindUtils.cn(
    'flex justify-center items-center rounded-lg  border border-blue-custom cursor-pointer px-3 py-1 transition transition transform hover:scale-105 bg-white-custom',
    className
  );
  return (
    <div className={classees} onClick={onClick}>
      <p className="text-blue-custom text-[20px] font-bold">
        {type === 'zoomIn' ? '+' : '-'}
      </p>
    </div>
  );
};

export default ButtonZoom;
