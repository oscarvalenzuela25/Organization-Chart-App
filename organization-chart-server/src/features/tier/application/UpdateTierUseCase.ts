import { CustomError } from '../../../utils/CustomError';
import { UpdateTierDTO } from '../domain/DTO/UpdateTierDTO';
import { TierRepositoryImp } from '../infrastructure/repository/TierRepositoryImp';

export class UpdateTierUseCase {
  constructor(private tierRepositoryImp: TierRepositoryImp) {}

  async execute(payload: UpdateTierDTO): Promise<void> {
    try {
      return this.tierRepositoryImp.updateTier(payload);
    } catch (error) {
      throw CustomError.badRequest('Error updating tier');
    }
  }
}
