'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    author: {
      type: DataTypes.STRING,
      allowNull:false
    },
    pages: {
      type: DataTypes.STRING,
      allowNull:false
    },
    publication_date: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {});

  return Book
}
