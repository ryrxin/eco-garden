const model = require("../model/userModel.js");

// to select all users from the User table
module.exports.readAllUser = (req, res, next) =>
{
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readAllUser:", error);
            res.status(500).json(error);
        } 
        else res.status(200).json(results);
    }

    model.selectAll(callback);
}

// to select a user by user_id from the User table
module.exports.readUserById = (req, res, next) =>
{
    const data = {
        user_id: req.params.user_id
    }

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readUserById:", error);
            res.status(500).json(error);
        } else {
            if(results.length == 0)  // when the given user_id does not exist
            {
                res.status(404).json({
                    message: "User not found"
                });
            }
            else res.status(200).json(results[0]);
        }
    }

    model.selectById(data, callback);
}

// a middleware: to check if an email is unique in the User table
module.exports.uniqueEmail = (req, res, next) =>
{
    const data = {
        email: req.body.email
    }

    const callback = (error, results, fields) => {
        if (error){
            res.status(500).json(error);
        }else if (results.length > 0){  // when the email is not unique 
            res.status(409).json({
                message: "The provided email is already associated with another user"
            })
        }else{
            next();
        }
    }

    model.uniqueEmail(data,callback);
}

// to insert a user into the User table
module.exports.createNewUser = (req, res, next) =>
{
    // when username and email is not given
    if(req.body.username == undefined || req.body.email == undefined)
    {
        res.status(400).send("Error: username or email is undefined");
        return;
    }

    const data = {
        username: req.body.username,
        email: req.body.email
    }
    
    const callback = (error, results, fields) => {
        if (error) {

            res.status(500).json(error);

        } else { 

            res.status(201).json({
                "user_id": results.insertId,
                "username": data.username,
                "email": data.email
            });
        }
    }

    model.insertSingle(data, callback);
}




// Check Username or Email Exist
module.exports.checkUsernameOrEmailExist = (req, res, next) => {
    const data = {
      username: req.body.username,
      email: req.body.email
    }
  
    const callback = (error, results, fields) => {
      if (error) {
        res.status(500).json(error);
      } else if (results[0].length > 0 || results[1].length > 0){
        console.log(results)
        res.status(409).json({
          message: "Username or email already exists"
        })
      } else {
        next();
      }
    }
    model.checkUsernameOrEmailExist(data, callback);
}

// Register
module.exports.register = (req,res,next)=>{
    if (req.body.username == undefined || req.body.email == undefined || req.body.password == undefined) {
      res.status(404).json({
        message:"Missing required data"
      })
    }
  
    const data = {
      username : req.body.username,
      email : req.body.email,
      hashPassword : res.locals.hash
    }
  
    const callback = (error, results, fields) =>{
      if(error){
        res.status(500).json(error)
      } else {
        res.locals.id = results[1][0].user_id
        res.locals.message = "User "+ results[1][0].username + " created successfully."
        next();
      }
    }
    model.register(data, callback)
}

// Login
module.exports.login = (req, res, next) =>
{
  if(req.body.username == undefined || req.body.password == undefined) {
    res.status(404).json({
      message: "Missing required data"
    })
  }

  const data = {
    username: req.body.username
  }

  const callback = (error, results, fields) => {
    if (error) {
      res.status(500).json(error);
    } else if(results.length == 0) {
       res.status(404).json({
        message: "User not found"
       })
    } else {
        res.locals.id = results[0].user_id
        res.locals.username = results[0].username
        res.locals.hash = results[0].password

      next();
    }
  }
  model.login(data, callback);
}


