const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
// const chatRoutes = require("./chatRoutes");
const itemRoutes = require('./itemRoutes');
const itemBoughtRoutes = require('./itemBoughtRoutes');

// ROUTES
router.use("/users", userRoutes);
// router.use("/chatgpt", chatRoutes)
router.use("/buy_items", itemRoutes);
router.use("/items", itemBoughtRoutes);

module.exports = router;
