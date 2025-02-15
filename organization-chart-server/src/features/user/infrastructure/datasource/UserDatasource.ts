import { User } from '../../../../models';

export class UserDatasource {
  async getUsers(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  }
}
