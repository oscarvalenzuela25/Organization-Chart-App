export type Candidate = {
  id: number;
  name: string;
};

export type Division = {
  id: number;
  name: string;
};

export type Relation = {
  id: number;
  jobParentId: number;
  jobChildId: number;
};

export type Job = {
  id: number;
  name: string;
  tierId: number;
  openings: number;
  candidates: Array<Candidate>;
  division: Division;
  relations: Array<Relation>;
};

export type JobDataToUpdate = {
  tierId?: number;
  divisionId?: number;
  name?: string;
  openings?: number;
};

export type jobDataToCreated = {
  tierId: number;
  jobParentId: number;
};
