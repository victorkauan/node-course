const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "user", "password", {
  host: "localhost",
  dialect: "mysql"
});

const Post = sequelize.define("posts", {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
});

// Comment the following lines after creating the post
Post.create({
  title: "Title 01",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus maximus nisin."
});

const User = sequelize.define("users", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

// Comment the following lines after creating the user
User.create({
  firstName: "Victor",
  lastName: "Kauan",
  age: 13,
  email: "teste@email.com"
});

// Comment the following lines after creating the tables
Post.sync({ force: true });
User.sync({ force: true });
