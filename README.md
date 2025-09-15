AUTH_SERVICE

Setting up Auth Service:
npm init
npm i express bodyparser dotenv nodemon




Setting up Sequelize ORM:
npm i mysql2 
npm i sequelize sequelize-cli
npm sequelize init
npx sequelize model:generate --name User --attributes email:string,password:string
npx sequelize db:migrate