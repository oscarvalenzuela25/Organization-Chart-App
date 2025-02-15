import { FC } from 'react';
import BaseLayout from '../../commons/layout/BaseLayout';
import TierRow from './components/TierRow';
import { DndContext } from '@dnd-kit/core';
import useHome from './hooks/useHome';
import HomeSkeleton from './components/HomeSkeleton';

const Home: FC = () => {
  const { tierData, getTierDataIsLoading, handleOnDragEnd } = useHome();

  return (
    <BaseLayout>
      <DndContext onDragEnd={handleOnDragEnd}>
        <HomeSkeleton isLoading={getTierDataIsLoading}>
          {tierData.map((tier, index) => (
            <TierRow key={tier.id} data={tier} position={index} />
          ))}
        </HomeSkeleton>
      </DndContext>
    </BaseLayout>
  );
};

export default Home;
