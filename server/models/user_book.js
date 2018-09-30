'use strict'
const User = require('./user');
const Book = require('./books');

module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    book_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    parent_user_book_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {});

  return UserBook
}
