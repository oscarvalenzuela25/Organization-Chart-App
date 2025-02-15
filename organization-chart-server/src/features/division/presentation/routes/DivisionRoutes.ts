import { Router } from 'express';
import { DivisionDatasource } from '../../infrastructure/datasource/DivisionDatasource';
import { DivisionRepositoryImp } from '../../infrastructure/repository/DivisionRepositoryImp';
import { GetDivisionsUseCase } from '../../application/GetDivisionsUseCase';
import { DivisionController } from '../controller/DivisionController';

export class DivisionRoutes {
  static get getRoutes() {
    const router = Router();
    const divisionDatasource = new DivisionDatasource();
    const divisionRepository = new DivisionRepositoryImp(divisionDatasource);
    const getDivisionsUseCase = new GetDivisionsUseCase(divisionRepository);
    const divisionController = new DivisionController(getDivisionsUseCase);

    router.get(
      '/api/v1/divisions',
      divisionController.getDivisions.bind(divisionController),
      divisionController.getDivisions
    );

    return router;
  }
}
