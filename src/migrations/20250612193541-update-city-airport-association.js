'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports','cityId', {
      type: 'foriegn key',
      references: {
        model: 'Cities',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDELETE: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint
  }
};
