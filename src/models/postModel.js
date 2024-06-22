const db = require("../services/db");

module.exports.createNew = (data, callback) => {
    const SQLSTATMENT = `
    INSERT INTO posts (user_id, text, created_on)
    VALUES (?, ?, CURRENT_TIMESTAMP);
    `;

    const VALUES = [data.user_id, data.text];
    db.query(SQLSTATMENT, VALUES, callback);
};

module.exports.selectAll = (callback) => {
    const SQLSTATMENT = `
    SELECT * FROM posts AS p
    RIGHT JOIN user AS u
    ON p.user_id = u.user_id;
    `;

    db.query(SQLSTATMENT, callback);
};

module.exports.selectById = (data, callback) => {
    const SQLSTATMENT = `
    SELECT * FROM posts
    WHERE post_id = ?;
    `;
    const VALUES = [data.id];

    db.query(SQLSTATMENT, VALUES, callback);
};

module.exports.deleteById = (data, callback) => {
    const SQLSTATMENT = `
    DELETE FROM posts
    WHERE post_id = ?;

    ALTER TABLE posts AUTO_INCREMENT = 1;
    `;
    const VALUES = [data.id];

    db.query(SQLSTATMENT, VALUES, callback);
};