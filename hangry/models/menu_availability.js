'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu_Availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu_Availability.belongsTo(models.Locations, {
        foreignKey: 'location_id',
      })
      Menu_Availability.belongsTo(models.Menu_Data, {
        foreignKey: 'menu_data_id',
      })
    }
  }
  Menu_Availability.init({
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menu_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Menu_Availability',
  });
  return Menu_Availability;
};