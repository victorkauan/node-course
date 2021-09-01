const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

// CONFIGURATIONS
// Template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/register", function (req, res) {
  res.render("form");
});

app.post("/add", function (req, res) {
  Post.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("An error has occurred: " + erro + ".");
    });
});

app.listen(1300, function () {
  console.log("Server is running on url http://localhost:1300!");
});
