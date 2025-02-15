'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Divisions', [
      {
        name: 'NO DIVISION',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'OPERATIONS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ENGINEERING',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'PRODUCT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'RH',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Divisions', null, {});
  },
};
