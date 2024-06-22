const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require('../controllers/jwt');
const bcryptMiddleware = require('../controllers/bcrypt');

// Route to get all users
router.get('/', userController.readAllUsers);

// Route to register a new user with middleware for checking if email or username exists, hashing password, and generating/sending JWT
router.post("/register", 
    // userController.checkUsernameOrEmailExist, 
    bcryptMiddleware.hashPassword, 
    userController.register, 
    jwtMiddleware.generateToken, 
    jwtMiddleware.sendToken
);

// Route to login a user with middleware for comparing passwords and generating/sending JWT
router.post("/login", 
    userController.login, 
    bcryptMiddleware.comparePassword, 
    jwtMiddleware.generateToken, 
    jwtMiddleware.sendToken
);

module.exports = router;
