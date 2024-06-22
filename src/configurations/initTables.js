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

        CREATE TABLE User (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
            points INT 
        );

        CREATE TABLE Inventory (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            item_id INT,
        );

        CREATE TABLE Items (
            item_id PRIMARY KEY AUTO_INCREMENT,
        );

        INSERT INTO User (username, email, password) VALUES
        ('admin', 'a@a.com', '${hash}');
        `;

        pool.query(SQLSTATEMENT, callback);
    }
});
