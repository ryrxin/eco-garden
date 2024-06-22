const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const jwtMiddleware = require("../controllers/jwt");
const bcryptMiddleware = require("../controllers/bcrypt");

router.get("/", userController.readAllUsers);
router.get("/profile", jwtMiddleware.verifyToken, userController.currentUser);
router.post("/register", userController.checkUsernameOrEmailExist, bcryptMiddleware.hashPassword, userController.register, jwtMiddleware.generateToken, jwtMiddleware.sendToken);
router.post("/login", userController.login, bcryptMiddleware.comparePassword, jwtMiddleware.generateToken, jwtMiddleware.sendToken);
router.put("/:id", jwtMiddleware.verifyToken, userController.checkUsernameOrEmailExist, userController.updateUserById);
router.get("/:id", userController.readUserById);
router.put("/points/:id/:points", userController.addPoints);

module.exports = router;
