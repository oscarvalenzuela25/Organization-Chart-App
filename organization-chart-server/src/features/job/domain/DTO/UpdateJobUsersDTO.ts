import { Request } from 'express';

export type Candidate = {
  id: number;
  name: string;
};

export class UpdateJobUsersDTO {
  public jobId: number;
  public users: Candidate[];

  constructor(req: Request) {
    this.jobId = +req.params.id;
    this.users = req.body.usersSelected;
  }
}
