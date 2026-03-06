
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Order = require("./Order");

const Item = sequelize.define("Item", {
  productId: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: "Items",
  timestamps: false
});

Order.hasMany(Item, { foreignKey: "orderId" });
Item.belongsTo(Order, { foreignKey: "orderId" });

module.exports = Item;
