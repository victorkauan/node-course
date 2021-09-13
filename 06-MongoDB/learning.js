const mongoose = require("mongoose");

// CONFIGURATIONS
// Mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/learning")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB: " + err);
  });

// USER MODEL
// Defining the model
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
  },
});

// Determining the model collection
mongoose.model("users", UserSchema);

// Creating a reference
const User = mongoose.model("users");

// Creating a document
new User({
  firstName: "Victor",
  lastName: "Kauan",
  email: "victorkauan@email.com",
  age: 20,
  country: "Brazil",
})
  .save()
  .then(() => {
    console.log("User successfully registered!");
  })
  .catch((err) => {
    console.log("There was an error registering the user: " + err);
  });
