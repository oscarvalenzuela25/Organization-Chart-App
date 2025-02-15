export class JobEntity {
  public id: number;
  public name: string;
  public openings: number;
  public tierId: number;
  public divisionId: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor({
    id,
    name,
    openings,
    tierId,
    divisionId,
    createdAt,
    updatedAt,
  }: JobEntity) {
    this.id = id;
    this.name = name;
    this.openings = openings;
    this.tierId = tierId;
    this.divisionId = divisionId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
