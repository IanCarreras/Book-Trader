'use strict';
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('book', {
    title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    author: {
      type:DataTypes.STRING,
      allowNull:false
    },
    pages: {
      type: DataTypes.STRING,
      allowNull:false
    },
    publication_date: {
      type: DataTypes.NUMBER,
      allowNull:false
    }
  }, {})
  book.associate = (models) => {

  }
  return book
}
