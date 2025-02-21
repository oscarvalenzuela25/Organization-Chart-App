import { JobRelationRepository } from '../../domain/repository/JobRelationRepository';
import { JobRelationDatasource } from '../datasource/JobRelationDatasource';

export class JobRelationRepositoryImp implements JobRelationRepository {
  constructor(private jobRelationDatasource: JobRelationDatasource) {}

  async addJobRelation(jobParentId: number, jobChildId: number): Promise<void> {
    return await this.jobRelationDatasource.addJobRelation(
      jobParentId,
      jobChildId
    );
  }

  async updateJobRelation(
    id: number,
    jobParentId?: number,
    jobChildId?: number
  ): Promise<void> {
    return await this.jobRelationDatasource.updateJobRelation(
      id,
      jobParentId,
      jobChildId
    );
  }
}
