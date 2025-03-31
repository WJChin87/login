const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();
//convert data to json
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//use ejs as the view engine
app.set("view engine", "ejs");

//static file
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

//Register user
app.post("/signup", async (req, res) => {
  const data = {
    //minimum 6 characters
    name: req.body.username,
    password: req.body.password,
  };

  if (data.name.length < 6 || data.password.length < 6) {
    res.send("Username and password must be at least 6 characters long.");
  }

  //check if user already exist
  const existingUser = await collection.findOne({ name: data.name });

  if (existingUser) {
    res.send("User already exists. Please choose a different username.");
  } else {
    //hash the password with bcrypt
    const saltRounds = 10; //number of salt round for bcrypt
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword;

    const userData = await collection.insertMany(data);
    console.log(userData);

    //redirect to login
    res.render("login");
  }
});

//Login user
app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.username });
    if (!check) {
      res.send("Username does not exist.");
    }

    //compare hashed password with database
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );
    if (isPasswordMatch) {
      res.render("home");
    } else {
      req.send("Wrong password");
    }
  } catch {
    res.send("Wrong details");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
