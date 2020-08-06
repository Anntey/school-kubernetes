import { Model, DataTypes, BuildOptions, Sequelize } from 'sequelize';
import { Task } from '../types';

type TaskModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Task;
};

export const taskFactory = (sequelize: Sequelize): TaskModelStatic => {
  return <TaskModelStatic>sequelize.define(
    'todos',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      task: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    },
    {
      underscored: true,
    }
  );
};