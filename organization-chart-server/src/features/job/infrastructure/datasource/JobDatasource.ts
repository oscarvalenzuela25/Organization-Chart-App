import { Job, UserJob } from '../../../../models';
import { AddJobDTOType } from '../../domain/DTO/AddJobDTO';
import { DeleteJobDTO } from '../../domain/DTO/DeleteJobDTO';
import { UpdateJobDTO } from '../../domain/DTO/UpdateJobDTO';
import { UpdateJobUsersDTO } from '../../domain/DTO/UpdateJobUsersDTO';
import { JobEntity } from '../../domain/entities/JobEntity';

export class JobDatasource {
  async addJob(payload: AddJobDTOType): Promise<JobEntity> {
    const job = await Job.create(payload);
    return job;
  }
  async deleteJob(dto: DeleteJobDTO): Promise<void> {
    const { id } = dto;
    await Job.destroy({ where: { id } });
  }

  async updateJob(dto: UpdateJobDTO): Promise<void> {
    const { id, ...payload } = dto;
    await Job.update(payload, { where: { id } });
  }

  async UpdateJobUsers(dto: UpdateJobUsersDTO): Promise<void> {
    const { jobId, ...payload } = dto;
    await UserJob.destroy({ where: { jobId } });

    const userJobs = payload.users.map(user => ({
      jobId,
      userId: user.id,
    }));

    await UserJob.bulkCreate(userJobs);
  }

  async getJobs(): Promise<JobEntity[]> {
    return await Job.findAll();
  }
}
