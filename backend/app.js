const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT;

const connection = require('./src/database/database');
const users = require('./src/routes/route-user');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    req.connection = connection;
    next();
});

app.use('/users', users);

app.listen(port, () => {
    console.log('Server runing.' );
})