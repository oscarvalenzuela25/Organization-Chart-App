import { Division } from '../../../../models';

export abstract class DivisionRepository {
  abstract getDivisions(): Promise<Division[]>;
  abstract getFirstDivision(): Promise<Division | null>;
  abstract createDefaultDivision(): Promise<Division>;
}
