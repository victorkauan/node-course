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
