const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

// CONFIGURATIONS
// Template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// MySQL database connection
const sequelize = new Sequelize("test", "victorkauan", "12345678", {
  host: "localhost",
  dialect: "mysql"
});

app.listen(1300, function() {
  console.log("Server is running on url http://localhost:1300!");
});
