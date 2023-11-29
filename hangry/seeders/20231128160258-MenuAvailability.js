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
    return queryInterface.bulkInsert('Menu_Availabilities', [
      {
        location_id: 1,
        menu_data_id: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 1,
        menu_data_id: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 1,
        menu_data_id: 3,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 2,
        menu_data_id: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 2,
        menu_data_id: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 2,
        menu_data_id: 3,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 3,
        menu_data_id: 1,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 3,
        menu_data_id: 2,
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        location_id: 3,
        menu_data_id: 3,
        quantity: 10,
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
    return queryInterface.bulkDelete('Menu_Availabilities', null, {restartIdentity: true});
  }
};
