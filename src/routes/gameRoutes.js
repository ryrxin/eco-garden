const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController");

router.get("/prompts", gameController.getPrompt);
router.post("/evaluate", gameController.evaluateAnswer);

module.exports = router;
