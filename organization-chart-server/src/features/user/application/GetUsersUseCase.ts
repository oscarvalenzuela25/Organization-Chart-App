import { CustomError } from '../../../utils/CustomError';
import { UserRepository } from '../domain/repository/UserRepository';

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    try {
      const users = await this.userRepository.getUsers();
      return users;
    } catch (error) {
      throw CustomError.badRequest('Error getting users');
    }
  }
}
