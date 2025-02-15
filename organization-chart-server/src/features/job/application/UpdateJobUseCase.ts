import { CustomError } from '../../../utils/CustomError';
import { UpdateJobDTO } from '../domain/DTO/UpdateJobDTO';
import { JobRepositoryImp } from './../infrastructure/repository/JobRepositoryImp';

export class UpdateJobUseCase {
  constructor(private jobRepositoryImp: JobRepositoryImp) {}

  async execute(dto: UpdateJobDTO): Promise<void> {
    try {
      await this.jobRepositoryImp.updateJob(dto);
    } catch (error) {
      throw CustomError.badRequest('Error updating job');
    }
  }
}
