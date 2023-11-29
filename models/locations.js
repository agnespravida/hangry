'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Locations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Locations.hasMany(models.Menu_Availability, {
        foreignKey: 'location_id',
      })
    }
  }
  Locations.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Locations',
  });
  return Locations;
};