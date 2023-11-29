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
    return queryInterface.bulkInsert('Menu_Data', [
      {
        name: 'Korean Chicker Wings',
        price: 20000,
        image: 'https://res.cloudinary.com/dgsgylfvr/image/upload/f_auto/v1/moon-chicken-website/menu-bs-ganjeong?_a=ATABlAA0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pulvinar tellus. Morbi auctor quam et justo congue aliquet. Etiam ac augue fringilla, ullamcorper augue congue, consequat elit. Proin tempus efficitur mauris sed sagittis. Ut auctor eleifend efficitur. Sed consectetur magna sed condimentum viverra. Sed tortor magna, dictum gravida nunc at, scelerisque efficitur diam. Nam quis pulvinar leo, vel tempus libero. Etiam at sagittis purus. Quisque vel odio at arcu suscipit iaculis sed vel neque. Nam nec libero ac elit scelerisque egestas faucibus vitae diam. Proin vitae mi quis dui lobortis sodales. Nunc eget tempus libero. Suspendisse potenti.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moon Fried Chickern',
        price: 20000,
        image: 'https://res.cloudinary.com/dgsgylfvr/image/upload/f_auto/v1/moon-chicken-website/menu-bs-honeyGarlaxy?_a=ATABlAA0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pulvinar tellus. Morbi auctor quam et justo congue aliquet. Etiam ac augue fringilla, ullamcorper augue congue, consequat elit. Proin tempus efficitur mauris sed sagittis. Ut auctor eleifend efficitur. Sed consectetur magna sed condimentum viverra. Sed tortor magna, dictum gravida nunc at, scelerisque efficitur diam. Nam quis pulvinar leo, vel tempus libero. Etiam at sagittis purus. Quisque vel odio at arcu suscipit iaculis sed vel neque. Nam nec libero ac elit scelerisque egestas faucibus vitae diam. Proin vitae mi quis dui lobortis sodales. Nunc eget tempus libero. Suspendisse potenti.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'XL Meteor Chickern',
        price: 20000,
        image: 'https://res.cloudinary.com/dgsgylfvr/image/upload/f_auto/v1/moon-chicken-website/menu-bs-smokeyComet?_a=ATABlAA0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pulvinar tellus. Morbi auctor quam et justo congue aliquet. Etiam ac augue fringilla, ullamcorper augue congue, consequat elit. Proin tempus efficitur mauris sed sagittis. Ut auctor eleifend efficitur. Sed consectetur magna sed condimentum viverra. Sed tortor magna, dictum gravida nunc at, scelerisque efficitur diam. Nam quis pulvinar leo, vel tempus libero. Etiam at sagittis purus. Quisque vel odio at arcu suscipit iaculis sed vel neque. Nam nec libero ac elit scelerisque egestas faucibus vitae diam. Proin vitae mi quis dui lobortis sodales. Nunc eget tempus libero. Suspendisse potenti.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Menu_Data', null, {restartIdentity: true});
  }
};
