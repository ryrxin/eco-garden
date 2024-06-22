const express = require("express");
const router = express.Router();

// const userRoutes = require("./userRoutes");
const gameRoutes = require("./gameRoutes");

// ROUTES
// router.use("/users", userRoutes);
router.use("/api", gameRoutes);

module.exports = router;
