'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.TEXT,
        notEmpty: true
      },
      email: {
          type: Sequelize.STRING,
          validate: {
              isEmail: true
          },
          notEmpty: true
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      status: {
          type: Sequelize.ENUM('active', 'inactive'),
          defaultValue: 'active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};