const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mysql://root:password@localhost/stock-api", {
  logging: false,
});
module.exports = { sequelize };
