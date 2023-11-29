'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/password.js')

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Transactions, {
        foreignKey: 'user_id'
      })
      Users.hasMany(models.Carts, {
        foreignKey: 'user_id'
      })
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.beforeCreate((user, options) => {
    const hashedPassword = hashPassword(user.password);
    user.password = hashedPassword;
  });
  return Users;
};
