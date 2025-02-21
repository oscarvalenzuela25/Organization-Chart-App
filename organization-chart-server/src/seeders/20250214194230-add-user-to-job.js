'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const jobQuery = `SELECT * FROM Jobs`;
    const [jobs] = await queryInterface.sequelize.query(jobQuery);
    const [firstJob] = jobs;

    const userQuery = `SELECT * FROM Users`;
    const [users] = await queryInterface.sequelize.query(userQuery);
    const [firstUser] = users;

    await queryInterface.bulkInsert('UsersJobs', [
      {
        jobId: firstJob.id,
        userId: firstUser.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('UsersJobs', null, {});
  },
};
