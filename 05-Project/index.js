const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
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

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.get("/register", function(req, res) {
  res.render("form");
});

app.post("/add", function(req, res) {
  res.send("Title: " + req.body.title + " Content: " + req.body.content);
});

app.listen(1300, function() {
  console.log("Server is running on url http://localhost:1300!");
});
