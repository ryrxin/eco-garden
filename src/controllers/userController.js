const model = require("../model/userModel");

// to select all users from the user table
module.exports.readAllUsers = async (req, res, next) => {
    try {
        const results = await model.selectAll();
        res.status(200).json(results);
    } catch (error) {
        console.error("Error readAllUsers:", error);
        res.status(500).json(error);
    }
}

// to select a user by user_id from the user table
module.exports.readUserById = async (req, res, next) => {
    const user_id = req.params.user_id;

    try {
        const result = await model.selectById(user_id);
        if (!result) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error("Error readUserById:", error);
        res.status(500).json(error);
    }
}

// Register a new user
module.exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await model.register(username, email, hashPassword);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Login a user
module.exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await model.login(username);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json(error);
    }
}

// to delete a user by user_id from the user table
module.exports.deleteUserById = async (req, res, next) => {
    const user_id = req.params.user_id;

    try {
        const result = await model.deleteById(user_id);
        if (!result) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.status(200).json({ message: "User deleted successfully" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
