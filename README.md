# Eco Garden

## Dependencies

-   express
-   dotenv
-   bcrypt
-   jsonwebtoken
-   @google/generative-ai
-   @supabase/supabase-js
-   nodemon

## Configuration
```npm install express dotenv bcrypt jsonwebtoken @google/generative-ai @supabase/supabase-js nodemon```
```npm run init_tables```

## .env (sample)

```
JWT_SECRET_KEY=<key>
JWT_EXPIRES_IN=60m
JWT_ALGORITHM=HS256

SUPABASE_URL=https://fcyefjktsejdukbtcpxq.supabase.co
SUPABASE_KEY=<key>

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
│   │   └── game.js
│   └── game.html
├── src/
│   ├── configurations/
│   │   ├── createSchema.js
│   │   └── initTables.js
│   ├── controllers/
│   │   ├── bcrypt.js
│   │   ├── gameController.js
│   │   ├── jwt.js
│   │   └── userController.js
│   ├── model/
│   │   ├── gameModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── gameRoutes.js
│   │   └── mainRoutes.js
│   ├── services/
│   │   ├── db.js
│   │   └── gemini.js
│   └── app.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```