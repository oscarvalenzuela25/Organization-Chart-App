import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  dialectOptions: {
    busyTimeout: 30000, // 30 seconds
  },
});
