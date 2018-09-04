'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_book = sequelize.define('user_book', {
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
  user_book.associate = function(models) {
    
  };
  return user_book;
};
