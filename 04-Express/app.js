const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", function(req, res) {
  res.sendFile(__dirname + "/html/about.html");
});

app.get("/blog", function(req, res) {
  res.send("Welcome to my blog!");
});

app.get("/hello/:name/:profession/:color", function(req, res) {
  res.send(
    "<h1>Hello, " +
      req.params.name +
      "!</h1>" +
      "<h2>Your profession is " +
      req.params.profession +
      ".</h2>" +
      "<h3>Your favorite color is " +
      req.params.color +
      ".</h3>"
  );
});

app.listen(1300, function() {
  console.log("Server is running on URL http://localhost:1300");
});
