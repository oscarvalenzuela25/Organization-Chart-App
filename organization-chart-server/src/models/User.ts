import { DataTypes, Model, Sequelize } from 'sequelize';
import { UserJob } from './UserJob';

export class User extends Model {
  declare id: number;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;

  static initialize(sequelize: Sequelize) {
    User.init(
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
        tableName: 'Users',
      }
    );
  }

  static associate() {
    User.hasMany(UserJob, { foreignKey: 'userId' });
  }
}
