import { Tier } from '../../../../models';
import { UpdateTierDTO } from '../DTO/UpdateTierDTO';

export type Job = {
  id: number;
  name: string;
  tierId: number;
  openings: number;
  Division: {
    id: number;
    name: string;
  };
  UserJobs: {
    id: number;
    User: {
      id: number;
      name: string;
    };
  }[];
  JobRelations: {
    id: number;
    jobParentId: number;
    jobChildId: number;
  }[];
};

export type TierType = {
  id: number;
  name: string;
  Jobs: Job[];
};

export type FormattedJob = {
  id: number;
  name: string;
  tierId: number;
  openings: number;
  candidates: {
    id: number;
    name: string;
  }[];
  division: {
    id: number;
    name: string;
  };
  relations: {
    id: number;
    jobParentId: number;
    jobChildId: number;
  }[];
};

export type FormattedTier = {
  id: number;
  name: string;
  jobs: FormattedJob[];
};

export abstract class TierRepository {
  abstract getTiersData(): Promise<TierType[]>;
  abstract updateTier(payload: UpdateTierDTO): Promise<void>;
  abstract getNextTierId(tierId: number): Promise<Tier | null>;
  abstract createTier(name: string): Promise<Tier>;
}
