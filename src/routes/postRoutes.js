const express = require("express");

const router = express.Router();

const controller = require("../controllers/postController");
const jwtMiddleware = require("../controllers/jwt"); 

router.get("/", controller.readAllPosts);
router.post("/", controller.createNew);
router.get("/:id", controller.readById);
router.delete("/:id", controller.deleteById);

module.exports = router;
