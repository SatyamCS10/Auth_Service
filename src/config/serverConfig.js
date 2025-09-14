const dotenv = require('dotenv');

dotenv.config({ path: './src/.env' });

module.exports = {
    PORT: process.env.PORT || 3000,
    JWT_KEY: process.env.JWT_KEY
};