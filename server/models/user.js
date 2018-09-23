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
      allowNull:true
    },
    state: {
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {});

  return user
}
