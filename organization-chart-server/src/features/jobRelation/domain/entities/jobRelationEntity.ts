export class JobRelation {
  public id: number;
  public jobParentId: number;
  public jobChildId: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor({
    id,
    jobParentId,
    jobChildId,
    createdAt,
    updatedAt,
  }: JobRelation) {
    this.id = id;
    this.jobParentId = jobParentId;
    this.jobChildId = jobChildId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
