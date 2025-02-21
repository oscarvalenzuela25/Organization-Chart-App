import { JobRelations } from '../../../../models/JobRelations';

export class JobRelationDatasource {
  async addJobRelation(jobParentId: number, jobChildId: number): Promise<void> {
    await JobRelations.create({
      jobParentId,
      jobChildId,
    });
  }

  async updateJobRelation(
    id: number,
    jobParentId?: number,
    jobChildId?: number
  ): Promise<void> {
    await JobRelations.update({ jobParentId, jobChildId }, { where: { id } });
  }
}
