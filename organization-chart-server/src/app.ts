import { envs } from './config/envs';
import { AppRoutes } from './routes';
import { Server } from './config/server';

const main = async () => {
  const routes = AppRoutes.routes;
  const server = new Server({ port: envs.PORT, routes });

  await server.start();
};

(() => main())();
