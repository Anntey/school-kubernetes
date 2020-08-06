import { Sequelize } from 'sequelize';

import { POSTGRES_URL } from '../setup';
import { taskFactory } from './task';

export const sequelize = new Sequelize(POSTGRES_URL, { logging: false });

export const Task = taskFactory(sequelize);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Could not connect to Database.');
    console.error(error);
  }
})();