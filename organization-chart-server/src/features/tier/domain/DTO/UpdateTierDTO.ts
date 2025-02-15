import { Request } from 'express';

export class UpdateTierDTO {
  public id: number;
  public name: string;

  constructor(req: Request) {
    this.id = +req.params.id;
    this.name = req.body.name;
  }
}
