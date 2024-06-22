// INCLUDES
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

// CREATE APP
const app = express();

// USES
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SETUP ROUTES
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// SETUP STATIC FILES
app.use("/", express.static("public"));

// EXPORT APP
module.exports = app;
