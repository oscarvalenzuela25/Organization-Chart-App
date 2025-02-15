import { AddJobDTOType } from '../../domain/DTO/AddJobDTO';
import { DeleteJobDTO } from '../../domain/DTO/DeleteJobDTO';
import { UpdateJobDTO } from '../../domain/DTO/UpdateJobDTO';
import { UpdateJobUsersDTO } from '../../domain/DTO/UpdateJobUsersDTO';
import { JobEntity } from '../../domain/entities/JobEntity';
import { JobRepository } from '../../domain/repository/JobRepository';
import { JobDatasource } from '../datasource/JobDatasource';

export class JobRepositoryImp implements JobRepository {
  constructor(private jobDatasource: JobDatasource) {}

  async addJob(payload: AddJobDTOType): Promise<JobEntity> {
    return await this.jobDatasource.addJob(payload);
  }

  async deleteJob(dto: DeleteJobDTO): Promise<void> {
    return await this.jobDatasource.deleteJob(dto);
  }

  async updateJob(payload: UpdateJobDTO): Promise<void> {
    return await this.jobDatasource.updateJob(payload);
  }

  async UpdateJobUsers(dto: UpdateJobUsersDTO): Promise<void> {
    return await this.jobDatasource.UpdateJobUsers(dto);
  }

  async getJobs(): Promise<JobEntity[]> {
    return await this.jobDatasource.getJobs();
  }
}
