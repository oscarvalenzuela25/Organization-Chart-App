import { Request } from 'express';

export type AddJobDTOType = {
  name: string;
  openings: number;
  tierId: number;
  divisionId: number;
};

export class AddJobDTO {
  public tierId: number;

  constructor(req: Request) {
    this.tierId = req.body.tierId;
  }
}
