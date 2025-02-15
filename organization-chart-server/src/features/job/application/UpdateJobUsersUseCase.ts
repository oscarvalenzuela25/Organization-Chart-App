import { UpdateJobUsersDTO } from '../domain/DTO/UpdateJobUsersDTO';
import { JobRepositoryImp } from '../infrastructure/repository/JobRepositoryImp';

export class UpdateJobUsersUseCase {
  constructor(private jobRepositoryImp: JobRepositoryImp) {}

  async execute(dto: UpdateJobUsersDTO): Promise<void> {
    try {
      await this.jobRepositoryImp.UpdateJobUsers(dto);
    } catch (error) {
      throw new Error('Error updating job users');
    }
  }
}
