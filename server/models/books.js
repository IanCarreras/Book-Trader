'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('books', {
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    author: {
      type: DataTypes.STRING,
      allowNull:false
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    publication_date: {
      type: DataTypes.DATE,
      allowNull:false
    }
  }, {});

  return Book
}
