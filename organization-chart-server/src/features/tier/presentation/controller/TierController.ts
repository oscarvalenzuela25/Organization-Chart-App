import { Request, Response } from 'express';
import { GetTiersDataUseCase } from './../../application/GetTiersDataUseCase';
import { UpdateTierDTO } from '../../domain/DTO/UpdateTierDTO';
import { UpdateTierUseCase } from '../../application/UpdateTierUseCase';

export class TierController {
  constructor(
    private getTiersDataUseCase: GetTiersDataUseCase,
    private updateTierUseCase: UpdateTierUseCase
  ) {}

  async getTiersData(_req: Request, res: Response) {
    const tiersData = await this.getTiersDataUseCase.execute();
    res.status(200).json(tiersData);
  }

  async updateTier(req: Request, res: Response) {
    const dto = new UpdateTierDTO(req);
    await this.updateTierUseCase.execute(dto);
    res.status(201).json({ message: 'Tier updated successfully' });
  }
}
