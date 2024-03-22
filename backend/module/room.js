const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    roomNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roomSeat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roomLocation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roomType: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'room',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
