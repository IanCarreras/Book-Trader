'use strict'

module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pages: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    publication_date: {
      type: DataTypes.NUMBER
      allowNull: true
    }
  })
}
