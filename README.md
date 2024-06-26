# Eco Garden
An AI powered minigame that focuses on sustainability.

## Dependencies

-   express
-   mysql2
-   dotenv
-   bcrypt
-   jsonwebtoken
-   @google/generative-ai
-   nodemon

## Configuration
```npm install express mysql2 dotenv bcrypt jsonwebtoken @google/generative-ai nodemon```
```npm run init_tables```

## .env (sample)

```
DB_HOST=<host>
DB_USER=<username>
DB_PASSWORD=<password>
DB_DATABASE=ecogarden

JWT_SECRET_KEY=<key>
JWT_EXPIRES_IN=60m
JWT_ALGORITHM=HS256

GEMINI_API_KEY=<key>
```

## To start the application, run
-   npm start

## To start the application in developer mode, run
-   npm run dev

## File Structure
```
eco-garden/
├── node_modules/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── createPost.js
│   │   ├── editProfile.js
│   │   ├── game.js
│   │   ├── getCurrentURL.js
│   │   ├── getPosts.js
│   │   ├── getSingleUserInfo.js
│   │   ├── leaderboards.js
│   │   ├── loginUser.js
│   │   ├── queryCmds.js
│   │   ├── registerUser.js
│   │   └── userNavbar.js
│   ├── createpost.html
│   ├── editprofile.html
│   ├── game.html
│   ├── index.html
│   ├── login.html
│   ├── posts.html
│   ├── profile.html
│   └── register.html
├── src/
│   ├── configs/
│   │   ├── createSchema.js
│   │   └── initTables.js
│   ├── controllers/
│   │   ├── bcrypt.js
│   │   ├── gameController.js
│   │   ├── jwt.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── gameModel.js
│   │   ├── postModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── gameRoutes.js
│   │   ├── mainRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   └── services/
│       ├── db.js
│       ├── gemini.js
│       └── app.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Project Structure


### Root Directory
- **node_modules/**: Contains all npm packages required for the project.
- **public/**: Contains static files (CSS, JS, HTML) served by the application.
- **src/**: Contains source files for the server-side application.

### Directory and File Descriptions

#### public/
- **css/**
  - **styles.css**: Main stylesheet for the application.

- **js/**
  - **createPost.js**: Script to handle creating posts.
  - **editProfile.js**: Script to handle editing user profiles.
  - **game.js**: JavaScript logic for the sustainability minigame.
  - **getCurrentURL.js**: Utility script to get the current URL.
  - **getPosts.js**: Script to fetch and display posts.
  - **getSingleUserInfo.js**: Script to fetch and display a single user's information.
  - **leaderboards.js**: Script to handle leaderboard functionalities.
  - **loginUser.js**: Script to handle user login.
  - **queryCmds.js**: Utility script for querying commands.
  - **registerUser.js**: Script to handle user registration.
  - **userNavbar.js**: Script to handle user-specific navigation bar functionalities.

- **createpost.html**: HTML file for the create post page.
- **editprofile.html**: HTML file for the edit profile page.
- **game.html**: HTML file for the game page.
- **index.html**: HTML file for the homepage.
- **login.html**: HTML file for the login page.
- **posts.html**: HTML file for the posts page.
- **profile.html**: HTML file for the user profile page.
- **register.html**: HTML file for the registration page.

#### src/
- **configs/**
  - **createSchema.js**: Script to create database schema.
  - **initTables.js**: Script to initialize database tables.

- **controllers/**
  - **bcrypt.js**: Script for handling password encryption using bcrypt.
  - **gameController.js**: Controller for game-related operations.
  - **jwt.js**: Script for handling JWT authentication.
  - **postController.js**: Controller for post-related operations.
  - **userController.js**: Controller for user-related operations.

- **models/**
  - **gameModel.js**: Model defining the structure of the game-related data.
  - **postModel.js**: Model defining the structure of the post-related data.
  - **userModel.js**: Model defining the structure of the user-related data.

- **routes/**
  - **gameRoutes.js**: Routes for game-related endpoints.
  - **mainRoutes.js**: Main application routes.
  - **postRoutes.js**: Routes for post-related endpoints.
  - **userRoutes.js**: Routes for user-related endpoints.

- **services/**
  - **db.js**: Database connection setup and configurations.
  - **gemini.js**: Google Gemini API configuration.
  - **app.js**: Main application setup and server initialization.

#### Root Files
- **.env**: Environment variables file (not included in the repository).
- **.gitignore**: Specifies which files and directories to ignore in the repository.
- **index.js**: Entry point for the server-side application.
- **package.json**: Contains metadata about the project and dependencies.
- **package-lock.json**: Automatically generated file that describes the exact tree that was generated by npm.
- **README.md**: This file.

## Acknowledgements
-   CloudHacks 2024 Hackathon Project
-   By Ryan, Xiu Qing, Zixing
-   [GitHub Repository](https://github.com/ryrxin/eco-garden)

