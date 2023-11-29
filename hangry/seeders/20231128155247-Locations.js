'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Locations', [
      {
        name: 'Pondok Aren',
        position: queryInterface.sequelize.fn('ST_GeomFromText','POINT(106.7034971785703 -6.27949551107298)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gading Serpong',
        position: queryInterface.sequelize.fn('ST_GeomFromText','POINT(106.62912730569865 -6.235116068964725)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alam Sutera',
        position: queryInterface.sequelize.fn('ST_GeomFromText','POINT(106.65887559774752 -6.234062878668687)'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Locations', null, {restartIdentity: true});
  }
};
