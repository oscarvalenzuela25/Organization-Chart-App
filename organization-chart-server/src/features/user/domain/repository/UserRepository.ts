import { User } from '../../../../models';

export abstract class UserRepository {
  abstract getUsers(): Promise<User[]>;
}
