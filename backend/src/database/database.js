require('dotenv').config();
const DATABASE = process.env.DATABASE;
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: HOST,
    user:USER,
    password : PASSWORD,
    database : DATABASE
});

module.exports = connection;