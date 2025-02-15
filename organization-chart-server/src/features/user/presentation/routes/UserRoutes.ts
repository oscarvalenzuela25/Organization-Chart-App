import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { UserRepositoryImp } from '../../infrastructure/repository/UserRepositoryImp';
import { UserDatasource } from './../../infrastructure/datasource/UserDatasource';

export class UserRoutes {
  static get getRoutes() {
    const router = Router();
    const userDatasource = new UserDatasource();
    const userRepositoryImp = new UserRepositoryImp(userDatasource);
    const controller = new UserController(userRepositoryImp);

    router.use(
      '/api/v1/users',
      controller.getUsers.bind(controller),
      controller.getUsers
    );

    return router;
  }
}
