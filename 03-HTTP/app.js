let http = require("http");

http
  .createServer((req, res) => {
    res.end("Hello, world! Welcome to my website!");
  })
  .listen(1300);

console.log("Server is running on port 1300");
