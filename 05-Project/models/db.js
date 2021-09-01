const Sequelize = require("sequelize");

// MySQL database connection
const sequelize = new Sequelize("postapp", "victorkauan", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
