'use strict';
const {
  Model
} = require('sequelize');

const Book = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publishedYear: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};

module.exports = Book;