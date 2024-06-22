const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const chatRoutes = require("./chatRoutes");

// ROUTES
router.use("/users", userRoutes);
router.use("/chatgpt", chatRoutes)

module.exports = router;
