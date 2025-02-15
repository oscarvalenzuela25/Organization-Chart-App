'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jhon Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'John Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jhonny Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jhane Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jhonny Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jhane Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
