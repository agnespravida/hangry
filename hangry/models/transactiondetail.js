'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionDetail.belongsTo(models.Transactions, {
        foreignKey: 'transaction_id'
      })
    }
  }
  TransactionDetail.init({
    transaction_id: DataTypes.INTEGER,
    menu_availability_id: DataTypes.INTEGER,
    menu_price: DataTypes.FLOAT,
    menu_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionDetail',
  });
  return TransactionDetail;
};