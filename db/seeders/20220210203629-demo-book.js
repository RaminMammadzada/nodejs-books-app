'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'How To Create Something Usefull in Moon',
      author: 'Ramin Mammadzada',
      publishedYear: '2021',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Miami In The Asia',
      author: 'John Kennedy',
      publishedYear: '2019',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Our Happy Mars Life',
      author: 'Mars Persona',
      publishedYear: '2009',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How Far Sun Is?',
      author: 'Inna Dery',
      publishedYear: '2011',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', null, {});
  }
};
