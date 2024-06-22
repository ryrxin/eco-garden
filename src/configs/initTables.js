const pool = require("../services/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const callback = (error, results, fields) => {
    if (error) {
        console.error("Error creating tables:", error);
    } else {
        console.log("Tables created successfully");
    }
    process.exit();
};

bcrypt.hash("1234", saltRounds, (error, hash) => {
    if (error) {
        console.error("Error hashing password:", error);
    } else {
        console.log("Hashed password:", hash);

        const SQLSTATEMENT = `
        DROP TABLE IF EXISTS user;

        DROP TABLE IF EXISTS posts;
    
        CREATE TABLE user (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            points INT
        );

        CREATE TABLE posts (
            post_id INT PRIMARY KEY AUTO_INCREMENT,
            user_id INT NOT NULL,
            text TEXT NOT NULL,
            created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        INSERT INTO user (username, email, password, points) VALUES
        ('admin', 'a@a.com', '${hash}');

        INSERT INTO posts (post_id, user_id, text) VALUES
        (1, 1, 'Hello!'),
        (2, 1, 'Recycle')
        `;

        pool.query(SQLSTATEMENT, callback);
    }
});
