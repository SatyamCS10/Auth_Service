AUTH_SERVICE

Authentication microservice built with Node.js, Express, and Sequelize ORM.

🚀 Setup Instructions
1. Initialize Project
npm init -y
npm install express body-parser dotenv nodemon


express → Web framework for building APIs

body-parser → Middleware for parsing JSON requests

dotenv → For environment variable management

nodemon → Auto-restarts the server during development

2. Setup Sequelize ORM

Install dependencies:

npm install mysql2
npm install sequelize sequelize-cli


Initialize Sequelize:

npx sequelize init


This creates:

config/config.json → Database config

models/ → Sequelize models

migrations/ → Database migrations

seeders/ → Data seeding scripts

3. Generate User Model
npx sequelize model:generate --name User --attributes email:string,password:string


Run migration:

npx sequelize db:migrate


This will create a Users table with columns:

id (auto-generated primary key)

email (string)

password (string)

createdAt / updatedAt (timestamps)

📂 Project Structure
AUTH_SERVICE/
│── config/            # Sequelize DB config
│── controllers/       # Request handling logic (maps routes → services)
│── middleware/        # Middleware (auth checks, logging, validation, etc.)
│── migrations/        # Database migration files
│── models/            # Sequelize models
│── repository/        # DB access layer (encapsulates queries)
│── routes/            # Route definitions (maps URL → controller)
│── seeders/           # Seeder files (optional sample data)
│── services/          # Business logic (called from controllers)
│── index.js           # Express server entry point
│── .env               # Environment variables
│── package.json

📖 Layer Explanation

controllers/ → Handle incoming requests and responses. Calls services.

services/ → Contain business logic (e.g., hashing passwords, generating tokens).

repository/ → Database interaction layer using Sequelize queries.

routes/ → Define REST API endpoints (e.g., /auth/login, /auth/register).

middleware/ → Authentication (JWT), validation, request logging, etc.

⚡ Run the Service
npm run dev


(by default using nodemon)

👉 Next Steps:

Add JWT authentication with jsonwebtoken

Use bcrypt for password hashing

Write controllers + services + repository for signup & login