import { Router } from 'express';
import { JobDatasource } from '../../infrastructure/datasource/JobDatasource';
import { JobRepositoryImp } from '../../infrastructure/repository/JobRepositoryImp';
import { DeleteJobUseCase } from '../../application/DeleteJobUseCase';
import { JobController } from '../controller/JobController';
import { validateSchema } from '../../../../middleware/schemaValidator';
import {
  addJobBodySchema,
  deleteJobParamsSchema,
  updateJobBodySchema,
  updateJobParamsSchema,
  updateJobUsersBodySchema,
  updateJobUsersParamsSchema,
} from '../../../../validations/jobValidator';
import { AddJobUseCase } from '../../application/AddJobUseCase';
import { TierRepositoryImp } from '../../../tier/infrastructure/repository/TierRepositoryImp';
import { TierDatasource } from './../../../tier/infrastructure/datasource/TierDatasource';
import { DivisionRepositoryImp } from '../../../division/infrastructure/repository/DivisionRepositoryImp';
import { DivisionDatasource } from './../../../division/infrastructure/datasource/DivisionDatasource';
import { UpdateJobUseCase } from '../../application/UpdateJobUseCase';
import { UpdateJobUsersUseCase } from '../../application/UpdateJobUsersUseCase';

export class JobRoutes {
  static get getRoutes() {
    const router = Router();
    const jobDataSource = new JobDatasource();
    const jobRepositoryImp = new JobRepositoryImp(jobDataSource);
    const deleteJobUseCase = new DeleteJobUseCase(jobRepositoryImp);

    const tierDatasource = new TierDatasource();
    const tierRepositoryImp = new TierRepositoryImp(tierDatasource);
    const divisionDatasource = new DivisionDatasource();
    const divisionRepositoryImp = new DivisionRepositoryImp(divisionDatasource);
    const addJobUseCase = new AddJobUseCase(
      jobRepositoryImp,
      tierRepositoryImp,
      divisionRepositoryImp
    );

    const updateJobUseCase = new UpdateJobUseCase(jobRepositoryImp);
    const updateJobUsersUseCase = new UpdateJobUsersUseCase(jobRepositoryImp);
    const jobController = new JobController(
      deleteJobUseCase,
      addJobUseCase,
      updateJobUseCase,
      updateJobUsersUseCase
    );

    router.delete(
      '/api/v1/job/:id',
      validateSchema(deleteJobParamsSchema, 'params'),
      jobController.deleteJob.bind(jobController),
      jobController.deleteJob
    );

    router.post(
      '/api/v1/job',
      validateSchema(addJobBodySchema, 'body'),
      jobController.addJob.bind(jobController),
      jobController.addJob
    );

    router.put(
      '/api/v1/job/:id',
      validateSchema(updateJobParamsSchema, 'params'),
      validateSchema(updateJobBodySchema, 'body'),
      jobController.updateJob.bind(jobController),
      jobController.updateJob
    );

    router.put(
      '/api/v1/job/:id/users',
      validateSchema(updateJobUsersParamsSchema, 'params'),
      validateSchema(updateJobUsersBodySchema, 'body'),
      jobController.updateJobUsers.bind(jobController),
      jobController.updateJobUsers
    );

    return router;
  }
}
