import { Router } from 'express';
import { TierDatasource } from './../../infrastructure/datasource/TierDatasource';
import { TierRepositoryImp } from './../../infrastructure/repository/TierRepositoryImp';
import { GetTiersDataUseCase } from '../../application/GetTiersDataUseCase';
import { TierController } from '../controller/TierController';
import { UpdateTierUseCase } from '../../application/UpdateTierUseCase';
import { validateSchema } from '../../../../middleware/schemaValidator';
import {
  updateTierBodySchema,
  updateTierParamsSchema,
} from '../../../../validations/tierValidator';

export class TierRoutes {
  static get getRoutes() {
    const router = Router();
    const tierDatasource = new TierDatasource();
    const tierRepositoryImp = new TierRepositoryImp(tierDatasource);
    const getTiersDataUseCase = new GetTiersDataUseCase(tierRepositoryImp);
    const updateTierUseCase = new UpdateTierUseCase(tierRepositoryImp);
    const tierController = new TierController(
      getTiersDataUseCase,
      updateTierUseCase
    );

    router.get(
      '/api/v1/tiers',
      tierController.getTiersData.bind(tierController),
      tierController.getTiersData
    );

    router.put(
      '/api/v1/tier/:id',
      validateSchema(updateTierParamsSchema, 'params'),
      validateSchema(updateTierBodySchema, 'body'),
      tierController.updateTier.bind(tierController),
      tierController.updateTier
    );

    return router;
  }
}
