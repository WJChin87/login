const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connect = mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xoofv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
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
