import { CustomError } from '../../../utils/CustomError';
import { FormattedTier, TierType } from '../domain/repository/TierRepository';
import { TierRepositoryImp } from '../infrastructure/repository/TierRepositoryImp';

export class GetTiersDataUseCase {
  constructor(private tierRepositoryImp: TierRepositoryImp) {}

  async execute(): Promise<FormattedTier[]> {
    try {
      const tiersData = await this.tierRepositoryImp.getTiersData();
      const newTierData = this.formatTiersData(tiersData);
      return newTierData;
    } catch (error) {
      console.error(error);
      throw CustomError.badRequest('Error getting tiers data');
    }
  }

  private formatTiersData(tiers: TierType[]): FormattedTier[] {
    return tiers.map(tier => ({
      id: tier.id,
      name: tier.name,
      jobs: tier.Jobs.map(job => ({
        id: job.id,
        name: job.name,
        tierId: job.tierId,
        openings: job.openings,
        candidates: job.UserJobs.map(userJob => ({
          id: userJob.User.id,
          name: userJob.User.name,
        })),
        division: {
          id: job.Division.id,
          name: job.Division.name,
        },
      })),
    }));
  }
}
