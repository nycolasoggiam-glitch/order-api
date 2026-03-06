
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("orderdb", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

module.exports = sequelize;
