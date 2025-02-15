import { AddJobDTOType } from '../DTO/AddJobDTO';
import { DeleteJobDTO } from '../DTO/DeleteJobDTO';
import { UpdateJobDTO } from '../DTO/UpdateJobDTO';
import { UpdateJobUsersDTO } from '../DTO/UpdateJobUsersDTO';
import { JobEntity } from '../entities/JobEntity';

export abstract class JobRepository {
  abstract addJob(payload: AddJobDTOType): Promise<JobEntity>;
  abstract deleteJob(dto: DeleteJobDTO): Promise<void>;
  abstract updateJob(payload: UpdateJobDTO): Promise<void>;
  abstract UpdateJobUsers(dto: UpdateJobUsersDTO): Promise<void>;
  abstract getJobs(): Promise<JobEntity[]>;
}
