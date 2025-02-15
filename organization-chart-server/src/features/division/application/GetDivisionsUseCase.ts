import { Division } from '../../../models';
import { CustomError } from '../../../utils/CustomError';
import { DivisionRepositoryImp } from '../infrastructure/repository/DivisionRepositoryImp';

export class GetDivisionsUseCase {
  constructor(private divisionRepositoryImp: DivisionRepositoryImp) {}

  async execute(): Promise<Division[]> {
    try {
      const divisions = await this.divisionRepositoryImp.getDivisions();
      return divisions;
    } catch (error) {
      throw CustomError.badRequest('Failed to get divisions');
    }
  }
}
