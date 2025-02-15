import express, { Router } from 'express';
import { sequelize } from './sequelize';
import cors from 'cors';
import './../models';

type Options = {
  port: number;
  routes: Router;
};

export class Server {
  private app = express();
  private port: number;
  private routes: Router;

  constructor({ port, routes }: Options) {
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.listen(this.port, () => {
      console.log(`Server is running on ${this.port}`);
    });
    this.app.use(this.routes);
    await sequelize.authenticate();
  }
}
