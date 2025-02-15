import { DataTypes, Model, Sequelize } from 'sequelize';
import { Job } from './Job';
import { User } from './User';

export class UserJob extends Model {
  declare id: number;
  declare jobId: number;
  declare userIdId: number;
  declare createdAt: Date;
  declare updatedAt: Date;

  static initialize(sequelize: Sequelize) {
    UserJob.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        jobId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Job,
            key: 'id',
          },
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: User,
            key: 'id',
          },
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        tableName: 'Usersjobs',
      }
    );
  }

  static associate() {
    UserJob.belongsTo(Job, { foreignKey: 'jobId' });
    UserJob.belongsTo(User, { foreignKey: 'userId' });
  }
}
