import { Tier } from '../../../../models';
import {
  TierRepository,
  TierType,
} from '../../domain/repository/TierRepository';
import { TierDatasource } from '../datasource/TierDatasource';

export class TierRepositoryImp implements TierRepository {
  constructor(private tierDataSource: TierDatasource) {}

  async getTiersData(): Promise<TierType[]> {
    return this.tierDataSource.getTiersData();
  }

  async updateTier(payload: any): Promise<void> {
    return this.tierDataSource.updateTier(payload);
  }

  async getNextTierId(tierId: number): Promise<Tier | null> {
    return this.tierDataSource.getNextTierId(tierId);
  }

  async createTier(name: string): Promise<Tier> {
    return this.tierDataSource.createTier(name);
  }
}
