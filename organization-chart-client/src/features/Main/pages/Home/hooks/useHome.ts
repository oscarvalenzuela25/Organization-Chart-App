import { DragEndEvent } from '@dnd-kit/core';
import useGetTierData from '../infrastructure/hooks/useGetTierData';
import useUpdateCard from '../../../commons/insfrastructure/hooks/useUpdateCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Position } from '../../../commons/types/position';
import { Job, Relation } from '../../../commons/types/jobs';

const useHome = () => {
  const [positions, setPositions] = useState<Record<number, Position>>({});
  const jobRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { tierData, getTierDataIsLoading, getTierDataIsFetching } =
    useGetTierData();

  const { handleUpdateCard, handleUpdateCardIsLoading } = useUpdateCard();

  const allJobs: Job[] = tierData.flatMap(tier => tier.jobs);

  const allRelations: Relation[] = allJobs.flatMap(job => job.relations);

  const updatePositions = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions: Record<number, Position> = {};
    allJobs.forEach(job => {
      const elem = jobRefs.current[job.id];
      if (elem) {
        const rect = elem.getBoundingClientRect();
        newPositions[job.id] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      }
    });
    setPositions(newPositions);
  }, [allJobs]);

  useEffect(() => {
    updatePositions();
    window.addEventListener('scroll', updatePositions, true);
    window.addEventListener('resize', updatePositions);

    return () => {
      window.removeEventListener('scroll', updatePositions, true);
      window.removeEventListener('resize', updatePositions);
    };
  }, [updatePositions]);

  const handleOnDragEnd = ({ active, over }: DragEndEvent) => {
    const cardId = active.id as number;
    const tierId = over?.id as number;
    handleUpdateCard({
      jobId: cardId,
      payload: {
        tierId,
      },
      callback: () => undefined,
    });
  };

  return {
    positions,
    allRelations,
    jobRefs,
    tierData,
    containerRef,
    getTierDataIsLoading,
    getTierDataIsFetching,
    handleUpdateCardIsLoading,
    handleOnDragEnd,
  };
};

export default useHome;
