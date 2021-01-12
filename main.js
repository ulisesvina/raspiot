// Dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Variables
const app = express();

// Middlewares
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
require("./routes")(express, app);

// Listening
require("./listen")(app);