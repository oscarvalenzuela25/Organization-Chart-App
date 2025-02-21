export abstract class JobRelationRepository {
  abstract addJobRelation(
    jobParentId: number,
    jobChildId: number
  ): Promise<void>;
  abstract updateJobRelation(
    id: number,
    jobParentId?: number,
    jobChildId?: number
  ): Promise<void>;
}
