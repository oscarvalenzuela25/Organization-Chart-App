import { Request } from 'express';

export class DeleteJobDTO {
  public id: number;

  constructor(req: Request) {
    this.id = +req.params.id;
  }
}
