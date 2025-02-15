'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'jobs',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          openings: {
            type: Sequelize.NUMBER,
            allowNull: false,
            defaultValue: 0,
          },
          tierId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'tiers',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          divisionId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'divisions',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        },
        {
          logging: console.log,
          transaction,
        }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('jobs', {
        logging: console.log,
        transaction,
      });
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
