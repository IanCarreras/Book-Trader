'use strict';
module.exports = (sequelize, DataTypes) => {
  const request = sequelize.define('request', {
    user_request_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    user_book_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    accepted: {
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {});

  return request
}
