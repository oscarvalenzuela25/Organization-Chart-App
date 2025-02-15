import { FC } from 'react';

type Props = {
  tierLevel: number;
};

const TierIcon: FC<Props> = ({ tierLevel }) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-base-light-custom text-gray-dark-custom font-medium  text-[14px] size-[24px]">
      {tierLevel}
    </div>
  );
};

export default TierIcon;
