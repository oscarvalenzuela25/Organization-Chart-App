import { Request } from 'express';

export type AddJobDTOType = {
  name: string;
  openings: number;
  tierId: number;
  divisionId: number;
};

export class AddJobDTO {
  public tierId: number;
  public jobParentId: number;

  constructor(req: Request) {
    this.tierId = req.body.tierId;
    this.jobParentId = req.body.jobParentId;
  }
}
