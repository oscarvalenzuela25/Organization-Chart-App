import { FC, PropsWithChildren } from 'react';

type Props = {
  isLoading: boolean;
} & PropsWithChildren;

const HomeSkeleton: FC<Props> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>;

  const tiers = Array.from({ length: 3 });

  return (
    <>
      {tiers.map((_, index) => {
        let classes =
          'flex justify-center items-center w-full min-h-full p-3 flex-wrap gap-20 ';
        classes +=
          (index + 1) % 2 === 0 ? 'bg-gray-light-custom' : 'bg-gray-custom';
        return (
          <div className="flex w-full min-h-[33.3vh]" key={index}>
            <div className="flex flex-col items-center justify-center bg-gray-dark-custom border-2 border-gray-dark-custom border-b-white-custom p-3 gap-2">
              <div className="w-[32px] h-[150px] animate-pulse bg-gray-custom rounded-sm" />
            </div>

            <div className={classes}>
              <div className="w-[200px] h-[200px] animate-pulse bg-gray-dark-custom rounded-sm shadow-md" />
              <div className="w-[200px] h-[200px] animate-pulse bg-gray-dark-custom rounded-sm shadow-md" />
              <div className="w-[200px] h-[200px] animate-pulse bg-gray-dark-custom rounded-sm shadow-md" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HomeSkeleton;
