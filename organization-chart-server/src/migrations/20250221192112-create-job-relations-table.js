'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'JobRelations',
        {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          jobParentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Jobs',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          jobChildId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Jobs',
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
      await queryInterface.dropTable('JobRelations', {
        logging: console.log,
        transaction,
      });
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
