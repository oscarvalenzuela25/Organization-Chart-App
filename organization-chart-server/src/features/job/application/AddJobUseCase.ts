import { CustomError } from '../../../utils/CustomError';
import { DivisionRepositoryImp } from '../../division/infrastructure/repository/DivisionRepositoryImp';
import { AddJobDTO, AddJobDTOType } from '../domain/DTO/AddJobDTO';
import { JobEntity } from '../domain/entities/JobEntity';
import { JobRepositoryImp } from '../infrastructure/repository/JobRepositoryImp';
import { TierRepositoryImp } from './../../tier/infrastructure/repository/TierRepositoryImp';

export class AddJobUseCase {
  constructor(
    private jobRepositoryImp: JobRepositoryImp,
    private tierRepositoryImp: TierRepositoryImp,
    private divisionRepositoryImp: DivisionRepositoryImp
  ) {}

  async execute(dto: AddJobDTO): Promise<JobEntity> {
    try {
      const { tierId } = dto;
      const nextTierId = await this.getTierId(tierId);
      const divisionId = await this.getDivisionId();

      const newJob: AddJobDTOType = {
        name: 'New Position',
        openings: 2,
        tierId: nextTierId,
        divisionId,
      };
      return await this.jobRepositoryImp.addJob(newJob);
    } catch (error) {
      throw CustomError.badRequest('Error adding job');
    }
  }

  async getTierId(previousTierId: number): Promise<number> {
    const tier = await this.tierRepositoryImp.getNextTierId(previousTierId);
    if (tier) return tier.id;
    const newTier = await this.tierRepositoryImp.createTier(
      `New Tier ${previousTierId + 1}`
    );
    return newTier.id;
  }

  async getDivisionId(): Promise<number> {
    const division = await this.divisionRepositoryImp.getFirstDivision();
    if (division) return division.id;
    const newDivision =
      await this.divisionRepositoryImp.createDefaultDivision();
    return newDivision.id;
  }
}
