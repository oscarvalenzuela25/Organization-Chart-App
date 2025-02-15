import { Request } from 'express';

export class UpdateJobDTO {
  public id: number;
  public name?: string;
  public openings?: number;
  public tierId?: number;
  public divisionId?: number;

  constructor(req: Request) {
    this.id = +req.params.id;
    this.name = req.body.name;
    this.openings = req.body.openings;
    this.tierId = req.body.tierId;
    this.divisionId = req.body.divisionId;
  }
}
