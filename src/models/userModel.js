const db = require("../services/db");

// GET /users
module.exports.selectAll = (callback) => {
    const SQLSTATMENT = `
    SELECT  * FROM user as u
    `;

    db.query(SQLSTATMENT, callback);
};

// login : select user by username
module.exports.selectByUsername = (data, callback) => {
    const SQLSTATMENT = `
    SELECT * FROM user
    WHERE username = ?;
    `;

    const VALUES = [data.username];

    db.query(SQLSTATMENT, VALUES, callback);
};

// register
module.exports.register = (data, callback) => {
    const SQLSTATMENT = `
    INSERT INTO user (username, email, password)
    VALUES (?, ?, ?);
    `;

    const VALUES = [data.username, data.email, data.hashPassword, data.username];

    db.query(SQLSTATMENT, VALUES, callback);
};

// middleware: check if username or email exists
module.exports.checkUsernameOrEmailExist = (data, callback) => {
    const SQLSTATMENT = `
    SELECT * FROM user
    WHERE email = ?;
    
    SELECT * From user
    WHERE username = ?;
    `;

    const VALUES = [data.email, data.username];

    db.query(SQLSTATMENT, VALUES, callback);
};


// POST /users
module.exports.createNew = (data, callback) => {
    const SQLSTATMENT = `
    INSERT INTO user (username, email)
    VALUES (?, ?);
    `;

    const VALUES = [data.username, data.email];

    db.query(SQLSTATMENT, VALUES, callback);
};

// GET /users/{user_id}
module.exports.selectById = (data, callback) => {
    const SQLSTATMENT = `
    SELECT * FROM user
    `;
    const VALUES = [data.id];

    db.query(SQLSTATMENT, VALUES, callback);
};

// PUT /users/{user_id}
module.exports.updateById = (data, callback) => {
    const SQLSTATMENT = `
    UPDATE user 
    SET username = ?, email = ?
    WHERE user_id = ?;
    `;
    const VALUES = [data.username, data.email, data.id];

    db.query(SQLSTATMENT, VALUES, callback);
};

// DELETE /users/{user_id}
module.exports.deleteById = (data, callback) => {
    const SQLSTATMENT = `
    DELETE FROM user 
    WHERE user_id = ?;

    ALTER TABLE user AUTO_INCREMENT = 1;
    `;
    const VALUES = [data.id];

    db.query(SQLSTATMENT, VALUES, callback);
};