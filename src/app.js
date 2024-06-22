// INCLUDES
const express = require("express");

// CREATE APP
const app = express();

// USES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SETUP ROUTES
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// SETUP STATIC FILES
app.use("/", express.static("public"));

// EXPORT APP
module.exports = app;
