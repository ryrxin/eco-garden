# Eco Garden


## Dependencies
- express
- mysql2
- dotenv
- bcrypt
- jsonwebtoken
- openai
- nodemon

## Configuration
```npm install express mysql2 dotenv bcrypt jsonwebtoken openai nodemon```
```npm run init_tables```

## .env (sample)
```
DB_HOST=<your>
DB_USER=<username>
DB_PASSWORD=<password>
DB_DATABASE=eco-garden

JWT_SECRET_KEY=your-secret-key
JWT_EXPIRES_IN=60m
JWT_ALGORITHM=HS256

OPENAI_API_KEY=<api key>
```

## To start the application, run
- npm start
    
## To start the application in developer mode, run
- npm run dev