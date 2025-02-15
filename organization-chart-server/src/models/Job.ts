import { DataTypes, Model, Sequelize } from 'sequelize';
import { Tier } from './Tier';
import { Division } from './Division';
import { UserJob } from './UserJob';

export class Job extends Model {
  declare id: number;
  declare name: string;
  declare openings: number;
  declare tierId: number;
  declare divisionId: number;
  declare createdAt: Date;
  declare updatedAt: Date;

  static initialize(sequelize: Sequelize) {
    Job.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        openings: {
          type: DataTypes.NUMBER,
          allowNull: false,
          defaultValue: 0,
        },
        tierId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Tier,
            key: 'id',
          },
        },
        divisionId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Division,
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
        tableName: 'Jobs',
      }
    );
  }

  static associate() {
    Job.belongsTo(Tier, { foreignKey: 'tierId' });
    Job.belongsTo(Division, { foreignKey: 'divisionId' });

    Job.hasMany(UserJob, { foreignKey: 'jobId' });
  }
}
