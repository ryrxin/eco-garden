const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.readAllPosts);
router.post("/", postController.createNew);
router.get("/:id", postController.readById);
router.delete("/:id", postController.deleteById);

module.exports = router;
