'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const tierQuery = `SELECT * FROM Tiers`;
    const [tiers] = await queryInterface.sequelize.query(tierQuery);
    const [firstTier] = tiers;

    const divisionQuery = `SELECT * FROM Divisions`;
    const [divisions] = await queryInterface.sequelize.query(divisionQuery);
    const [firstDivision] = divisions;

    await queryInterface.bulkInsert('Jobs', [
      {
        tierId: firstTier.id,
        divisionId: firstDivision.id,
        name: 'New Position',
        openings: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Jobs', null, {});
  },
};
