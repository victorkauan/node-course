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
app.get("/", (req, res) => {
  Post.findAll({ order: [["id", "DESC"]] }).then((posts) => {
    res.render("home", { posts: posts, name: "teste" });
  });
});

app.get("/register", (req, res) => {
  res.render("form");
});

app.post("/add", (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send("An error has occurred: " + erro + ".");
    });
});

app.get("/delete/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("Post successfully deleted!");
    })
    .catch((erro) => {
      res.send("An error has occurred: This post doesn't exist!");
    });
});

app.listen(1300, () => {
  console.log("Server is running on url http://localhost:1300");
});
