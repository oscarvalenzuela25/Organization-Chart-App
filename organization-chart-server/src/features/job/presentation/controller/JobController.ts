import { Request, Response } from 'express';
import { DeleteJobUseCase } from '../../application/DeleteJobUseCase';
import { DeleteJobDTO } from '../../domain/DTO/DeleteJobDTO';
import { AddJobDTO } from '../../domain/DTO/AddJobDTO';
import { AddJobUseCase } from './../../application/AddJobUseCase';
import { UpdateJobDTO } from '../../domain/DTO/UpdateJobDTO';
import { UpdateJobUseCase } from '../../application/UpdateJobUseCase';
import { UpdateJobUsersUseCase } from '../../application/UpdateJobUsersUseCase';
import { UpdateJobUsersDTO } from '../../domain/DTO/UpdateJobUsersDTO';

export class JobController {
  constructor(
    private deleteJobUseCase: DeleteJobUseCase,
    private addJobUseCase: AddJobUseCase,
    private updateJobUseCase: UpdateJobUseCase,
    private updateJobUsersUseCase: UpdateJobUsersUseCase
  ) {}

  public async deleteJob(req: Request, res: Response): Promise<void> {
    const dto = new DeleteJobDTO(req);
    await this.deleteJobUseCase.execute(dto);
    res.status(204).send({ message: 'Job deleted' });
  }

  public async addJob(req: Request, res: Response): Promise<void> {
    const dto = new AddJobDTO(req);
    const job = await this.addJobUseCase.execute(dto);
    res.status(200).send(job);
  }

  public async updateJob(req: Request, res: Response): Promise<void> {
    const dto = new UpdateJobDTO(req);
    await this.updateJobUseCase.execute(dto);
    res.status(204).send({ message: 'Job updated' });
  }

  public async updateJobUsers(req: Request, res: Response): Promise<void> {
    const dto = new UpdateJobUsersDTO(req);
    await this.updateJobUsersUseCase.execute(dto);
    res.status(204).send({ message: 'Job users updated' });
  }
}
