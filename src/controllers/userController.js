const model = require("../models/userModel.js");

// GET /users
module.exports.readAllUsers = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readAllUser:", error);
            res.status(500).json(error);
        } else res.status(200).json(results);
    };

    model.selectAll(callback);
};

// login
module.exports.login = (req, res, next) => {
    if (req.body.username == undefined || req.body.password == undefined) {
        res.status(404).json({
            message: "Missing required data",
        });
    }

    const data = {
        username: req.body.username,
    };

    const callback = (error, results, fields) => {
        if (error) {
            res.status(500).json(error);
        } else if (results.length == 0) {
            res.status(404).json({
                message: "User not found",
            });
        } else {
            res.locals.hash = results[0].password;
            res.locals.userId = results[0].user_id;
            next();
        }
    };

    model.selectByUsername(data, callback);
};

// register
module.exports.register = (req, res, next) => {
    if (req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(404).json({
            message: "Missing required data",
        });
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        hashPassword: res.locals.hash,
    };

    const callback = (error, results, fields) => {
        if (error) {
            res.status(500).json(error);
        } else {
            res.locals.user_id = results.insertId;
            next();
        }
    };
    model.register(data, callback);
};

// middleware: check if username or email exists
module.exports.checkUsernameOrEmailExist = (req, res, next) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
    };

    const callback = (error, results, fields) => {
        if (error) {
            res.status(500).json(error);
        } else if (results[0].length > 0 || results[1].length > 0) {
            res.status(409).json({
                message: "Username or email already exists",
            });
        } else {
            next();
        }
    };
    model.checkUsernameOrEmailExist(data, callback);
};

// POST /users
module.exports.createNewUser = (req, res, next) => {
    if (req.body.username == undefined) {
        res.status(400).send("Error: username is undefined");
        return;
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error createNewUser:", error);
            res.status(500).json(error);
        } else {
            res.locals.user_id = results.insertId;
            next();
        }
    };

    model.insertSingle(data, callback);
};

// GET /users/{user_id}
module.exports.readUserById = (req, res, next) => {
    const data = {
        id: req.params.id,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readUserById:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).json({
                    message: "User not found",
                });
            } else res.status(200).json(results[0]);
        }
    };

    model.selectById(data, callback);
};

// GET api/users/profile
module.exports.currentUser = (req, res, next) => {
    const data = {
        id: res.locals.userId,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readUserById:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).json({
                    message: "User not found",
                });
            } else res.status(200).json(results[0]);
        }
    };

    model.selectById(data, callback);
};

// PUT /users/{user_id}
module.exports.updateUserById = (req, res, next) => {
    if (req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
        res.status(400).json({
            message: "Error: username, email or password is undefined",
        });
        return;
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        id: req.params.id,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error updateUserById:", error);
            res.status(500).json(error);
        } else {
            if (results.affectedRows == 0) {
                res.status(404).json({
                    message: "User not found",
                });
            } else res.status(204).send(); // 204 No Content
        }
    };

    model.updateById(data, callback);
};

// DELETE /users/{user_id}
module.exports.deleteUserById = (req, res, next) => {
    const data = {
        id: req.params.id,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error deleteUserById:", error);
            res.status(500).json(error);
        } else {
            if (results.affectedRows == 0) {
                res.status(404).json({
                    message: "User not found",
                });
            } else res.status(204).send(); // 204 No Content
        }
    };

    model.deleteById(data, callback);
};

module.exports.addPoints = (req, res, next) => {
    const data = {
        user_id: req.params.id,
        points: req.params.points,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error addPoints:", error);
            res.status(500).json(error);
        } else {
            return res.status(204).json();
        }
    };

    model.addPoints(data, callback);
};
