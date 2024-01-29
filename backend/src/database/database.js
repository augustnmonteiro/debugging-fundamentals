require('dotenv').config();

const config = {
    DATABASE: process.env.DATABASE,
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD
};

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: config.HOST,
    user:config.USER,
    password : config.PASSWORD,
    database : config.DATABASE
});

module.exports = connection;