'use strict'
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    first_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    last_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    city: {
      type:DataTypes.STRING,
      allowNull:false
    },
    state: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {})
  user.associate = (models) => {

  }
  return user
}
