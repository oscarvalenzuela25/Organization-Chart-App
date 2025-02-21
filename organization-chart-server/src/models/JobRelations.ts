import { DataTypes, Model, Sequelize } from 'sequelize';
import { Job } from './Job';

export class JobRelations extends Model {
  declare id: number;
  declare jobParentId: number;
  declare jobChildId: number;
  declare createdAt: Date;
  declare updatedAt: Date;

  static initialize(sequelize: Sequelize) {
    JobRelations.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        jobParentId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Job,
            key: 'id',
          },
        },
        jobChildId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Job,
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
        tableName: 'JobRelations',
      }
    );
  }

  static associate() {
    JobRelations.belongsTo(Job, { foreignKey: 'jobParentId' });
    JobRelations.belongsTo(Job, { foreignKey: 'jobChildId' });
  }
}
