const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const gameRoutes = require("./gameRoutes");
const itemRoutes = require('./itemRoutes');
const itemBoughtRoutes = require('./itemBoughtRoutes');

// ROUTES
router.use("/users", userRoutes);
router.use("/buy_items", itemRoutes);
router.use("/items", itemBoughtRoutes);
router.use("/api", gameRoutes);

module.exports = router;
