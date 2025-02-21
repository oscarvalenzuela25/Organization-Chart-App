import {
  Division,
  Job,
  Tier,
  User,
  UserJob,
  JobRelations,
} from '../../../../models';
import { UpdateTierDTO } from '../../domain/DTO/UpdateTierDTO';
import { TierType } from '../../domain/repository/TierRepository';
import { Op } from 'sequelize';

export class TierDatasource {
  async getTiersData(): Promise<TierType[]> {
    const tiers: any = await Tier.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Job,
          attributes: ['id', 'name', 'tierId', 'openings'],
          include: [
            {
              model: Division,
              attributes: ['id', 'name'],
            },
            {
              model: UserJob,
              attributes: ['id'],
              include: [
                {
                  model: User,
                  attributes: ['id', 'name'],
                },
              ],
            },
            {
              model: JobRelations,
              attributes: ['id', 'jobParentId', 'jobChildId'],
            },
          ],
        },
      ],
    });
    return tiers;
  }

  async updateTier(payload: UpdateTierDTO): Promise<void> {
    const { id, ...payloadToUpdate } = payload;
    await Tier.update(payloadToUpdate, { where: { id } });
  }

  async getNextTierId(tierId: number): Promise<Tier | null> {
    const tier = await Tier.findOne({
      where: {
        id: {
          [Op.gt]: tierId,
        },
      },
      order: [['id', 'ASC']],
    });
    return tier;
  }

  async createTier(name: string): Promise<Tier> {
    const tier = await Tier.create({ name });
    return tier;
  }
}
