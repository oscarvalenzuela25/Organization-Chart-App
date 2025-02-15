import { User } from '../../../../models';
import { UserRepository } from '../../domain/repository/UserRepository';
import { UserDatasource } from '../datasource/UserDatasource';

export class UserRepositoryImp implements UserRepository {
  constructor(private userDatasource: UserDatasource) {}

  async getUsers(): Promise<User[]> {
    return this.userDatasource.getUsers();
  }
}
