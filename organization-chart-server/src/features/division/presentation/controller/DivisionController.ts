import { Request, Response } from 'express';
import { GetDivisionsUseCase } from '../../application/GetDivisionsUseCase';

export class DivisionController {
  constructor(private getDivisionsUseCase: GetDivisionsUseCase) {}

  async getDivisions(_req: Request, res: Response) {
    const divisions = await this.getDivisionsUseCase.execute();
    res.status(200).json(divisions);
  }
}
