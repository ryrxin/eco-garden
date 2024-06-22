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
        DROP TABLE IF EXISTS User;

        DROP TABLE IF EXISTS Item;

        DROP TABLE IF EXISTS ItemBought;

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

        CREATE TABLE Item (
            item_id INT PRIMARY KEY AUTO_INCREMENT,
            name TEXT,
            description TEXT,
            item_points INT
        );

        CREATE TABLE ItemBought (
            itemBought_id INT PRIMARY KEY AUTO_INCREMENT,
            item_id INT NOT NULL,
            user_id INT NOT NULL,
            item_name TEXT,
            item_description TEXT
);

        INSERT INTO User (username, email, password, points) VALUES
        ('admin', 'a@a.com', '${hash}', 100);

       INSERT INTO Item (name, description, item_points) VALUES
        ('Rose', 'Classic, layered petals, fragrant.', 10),
        ('Tulip', 'Vibrant, cup-shaped, spring symbol.', 8),
        ('Daisy', 'Cheerful, yellow center, white petals.', 6),
        ('Sunflower', 'Large, bright, turns to sun.', 7),
        ('Lily', 'Elegant, trumpet-shaped, pure.', 9);
        `;

        pool.query(SQLSTATEMENT, callback);
    }
});
