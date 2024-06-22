const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const gameRoutes = require("./gameRoutes");
const postRoutes = require("./postRoutes");

router.use("/users", userRoutes);
router.use("/game", gameRoutes);
router.use("/posts", postRoutes);

module.exports = router;
