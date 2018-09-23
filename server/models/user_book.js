'use strict'
const User = require('./user');
const Book = require('./book');

module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('user_book', {
    user_id: {
      type:DataTypes.NUMBER,
      allowNull:false
    },
    book_id: {
      type:DataTypes.NUMBER,
      allowNull:false
    }
    parent_user_book_id: {
      type:DataTypes.NUMBER,
      allowNull:false
  }, {});

  return user_book
}
