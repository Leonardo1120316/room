var DataTypes = require("sequelize").DataTypes;
var _record = require("./record");
var _room = require("./room");
var _user = require("./user");

function initModels(sequelize) {
  var record = _record(sequelize, DataTypes);
  var room = _room(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    record,
    room,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
