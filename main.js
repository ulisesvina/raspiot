// Dependencies
const express = require("express");

// Variables
const app = express();

// Middlewares

// Routes
require("./routes")(express, app);

// Listening
app.listen(80)