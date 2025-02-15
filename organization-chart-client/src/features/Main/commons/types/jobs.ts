export type Candidate = {
  id: number;
  name: string;
};

export type Division = {
  id: number;
  name: string;
};

export type Job = {
  id: number;
  name: string;
  tierId: number;
  openings: number;
  candidates: Array<Candidate>;
  division: Division;
};

export type JobDataToUpdate = {
  tierId?: number;
  divisionId?: number;
  name?: string;
  openings?: number;
};

export type jobDataToCreated = {
  tierId: number;
};
