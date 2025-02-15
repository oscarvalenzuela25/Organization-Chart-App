import { Request, Response } from 'express';
import { GetUsersUseCase } from '../../application/GetUsersUseCase';
import { UserRepositoryImp } from '../../infrastructure/repository/UserRepositoryImp';

export class UserController {
  constructor(private userRepositoryImp: UserRepositoryImp) {}

  async getUsers(_req: Request, res: Response) {
    const useCase = new GetUsersUseCase(this.userRepositoryImp);
    const users = await useCase.execute();
    res.status(200).json(users);
  }
}
