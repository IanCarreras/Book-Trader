'use strict';
module.exports = (sequelize, DataTypes) => {
  var request = sequelize.define('request', {
    user_request_id: {
      type:DataTypes.NUMBER,
      allowNull:false
    },
    user_book_id: {
      type:DataTypes.NUMBER,
      allowNull:false
    },
    accepted: {
      type:DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {});
  request.associate = function(models) {
    
  };
  return request;
};
