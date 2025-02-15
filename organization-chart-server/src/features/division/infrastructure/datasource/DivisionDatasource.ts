import { Division } from './../../../../models/Division';

export class DivisionDatasource {
  async getDivisions(): Promise<Division[]> {
    const divisions = await Division.findAll();
    return divisions;
  }

  async getFirstDivision(): Promise<Division | null> {
    const division = await Division.findOne({
      order: [['id', 'ASC']],
    });
    return division;
  }

  async createDefaultDivision(): Promise<Division> {
    const division = await Division.create({
      name: 'NO DIVISION',
    });
    return division;
  }
}
