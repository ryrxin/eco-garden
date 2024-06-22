const db = require("../models/postModel.js");

module.exports.createNew = (req, res, next) => {
    if (req.body.text == undefined) {
        res.status(400).json({
            Error: "Text is undefined.",
        }); // 400 Bad Request
        return;
    }

    const data = {
        user_id: req.body.user_id,
        text: req.body.text,
    };


    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error createNewPost:", error);
            res.status(500).json(error);
        } else {
            res.status(201).json({
                post_id: results.insertId,
                user_id: data.user_id,
                text: data.text,
            }); // 201 Created
            next();
        }
    };

    db.createNew(data, callback);
};

module.exports.readAllPosts = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            res.status(500).json(error);
        } else res.status(200).json(results);
    };

    db.selectAll(callback);
};

module.exports.readById = (req, res, next) => {
    const data = {
        id: req.params.id,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readPostById:", error);
            res.status(500).json(error);
        } else {
            if (results.length == 0) {
                res.status(404).send(); // 404 Not Found
            } else {
                res.status(200).json(results[0]); // 200 OK
            }
        }
    };

    db.selectById(data, callback);
};


module.exports.deleteById = (req, res, next) => {
    const data = {
        id: req.params.id,
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error deletePostById:", error);
            res.status(500).json(error);
        } else {
            if (results[0].affectedRows == 0) {
                res.status(404).json({
                    message: "Post not found",
                });
            } else res.status(204).send(); // 204 No Content
        }
    };

    db.deleteById(data, callback);
};