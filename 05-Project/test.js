const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "user", "password", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Sucessfully connected!");
  })
  .catch(function (erro) {
    console.log("Connection error: " + erro);
  });
