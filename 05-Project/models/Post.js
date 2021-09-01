const db = require("./db.js");

const Post = db.sequelize.define("posts", {
  title: {
    type: db.Sequelize.STRING,
  },
  content: {
    type: db.Sequelize.TEXT,
  },
});

// Comment the following line after creating the table
// Post.sync({ force: true });

module.exports = Post;
