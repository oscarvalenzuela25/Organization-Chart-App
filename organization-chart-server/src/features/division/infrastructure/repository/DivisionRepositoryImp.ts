import { Division } from '../../../../models';
import { DivisionRepository } from '../../domain/repository/DivisionRepository';
import { DivisionDatasource } from '../datasource/DivisionDatasource';

export class DivisionRepositoryImp implements DivisionRepository {
  constructor(private divisionDatasource: DivisionDatasource) {}

  async getDivisions(): Promise<Division[]> {
    return await this.divisionDatasource.getDivisions();
  }

  async getFirstDivision(): Promise<Division | null> {
    return await this.divisionDatasource.getFirstDivision();
  }

  async createDefaultDivision(): Promise<Division> {
    return await this.divisionDatasource.createDefaultDivision();
  }
}
