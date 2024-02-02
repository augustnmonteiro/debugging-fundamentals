//express
const express = require('express');
const app = express();
app.use(express.json());

//doteEnv
require('dotenv').config();
const port = process.env.PORT;

//userAgent
const useragent = require('express-useragent');
app.use(useragent.express());

//requestIpClient
const requestIp = require('request-ip');
app.use(requestIp.mw());

//Import archives
const connection = require('./src/database/database.js');
const users = require('./src/routes/route-user.js');

app.use((req, res, next) => {
    console.log(req.headers);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    req.connection = connection;
    next();
});

app.use('/users', users);

app.listen(port, () => {
    console.log('Server runing.');
})