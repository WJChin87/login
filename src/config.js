const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://wingjoechin:9wmnbdslfN8B2qBM@cluster0.xoofv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

//check database connected or not
connect
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database cannot be connected");
  });

//create a schema
const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
