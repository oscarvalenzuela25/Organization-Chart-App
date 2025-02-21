import { FC } from 'react';
import BaseLayout from '../../commons/layout/BaseLayout';
import TierRow from './components/TierRow';
import { DndContext } from '@dnd-kit/core';
import useHome from './hooks/useHome';
import HomeSkeleton from './components/HomeSkeleton';
import Connector from '../../commons/components/Connector';

const Home: FC = () => {
  const {
    positions,
    allRelations,
    jobRefs,
    tierData,
    containerRef,
    getTierDataIsLoading,
    handleOnDragEnd,
  } = useHome();

  return (
    <BaseLayout ref={containerRef}>
      <DndContext onDragEnd={handleOnDragEnd}>
        <HomeSkeleton isLoading={getTierDataIsLoading}>
          {tierData.map((tier, index) => (
            <TierRow
              key={tier.id}
              data={tier}
              position={index}
              jobRefs={jobRefs}
            />
          ))}

          {allRelations.map(({ id, jobParentId, jobChildId }) => {
            const startPos = positions[jobParentId];
            const endPos = positions[jobChildId];
            if (startPos && endPos) {
              return (
                <Connector
                  key={`connector-${id}`}
                  start={startPos}
                  end={endPos}
                />
              );
            }
            return null;
          })}
        </HomeSkeleton>
      </DndContext>
    </BaseLayout>
  );
};

export default Home;
