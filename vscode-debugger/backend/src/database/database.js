require('dotenv').config();

const config = {
    DATABASE: process.env.DB_DATABASE,
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD
};

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: config.HOST,
    user:config.USER,
    password : config.PASSWORD,
    database : config.DATABASE
});

module.exports = connection;