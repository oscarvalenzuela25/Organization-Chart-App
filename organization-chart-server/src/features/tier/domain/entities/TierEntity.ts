export class TierEntity {
  public id: number;
  public name: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor({ id, name, createdAt, updatedAt }: TierEntity) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
