import { CustomError } from '../../../utils/CustomError';
import { DeleteJobDTO } from '../domain/DTO/DeleteJobDTO';
import { JobRepositoryImp } from '../infrastructure/repository/JobRepositoryImp';

export class DeleteJobUseCase {
  constructor(private jobRepositoryImp: JobRepositoryImp) {}

  async execute(dto: DeleteJobDTO): Promise<void> {
    try {
      const jobs = await this.jobRepositoryImp.getJobs();
      if (jobs.length <= 1) {
        throw CustomError.badRequest('You can not delete the last job');
      }
      return await this.jobRepositoryImp.deleteJob(dto);
    } catch (error) {
      throw CustomError.badRequest('Error deleting job');
    }
  }
}
