import { Job } from './jobs';

export type TierData = {
  id: number;
  name: string;
  jobs: Array<Job>;
};

export type TierSelected = {
  id: number;
  name: string;
};

export type TierDataToUpdate = {
  name: string;
};
