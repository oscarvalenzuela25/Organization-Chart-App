import { DataTypes, Model, Sequelize } from 'sequelize';
import { Job } from './Job';

export class Tier extends Model {
  declare id: number;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;

  static initialize(sequelize: Sequelize) {
    Tier.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
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
        tableName: 'Tiers',
      }
    );
  }

  static associate() {
    Tier.hasMany(Job, { foreignKey: 'tierId' });
  }
}
