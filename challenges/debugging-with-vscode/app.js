//express
const express = require('express');
const app = express;
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
const connection = require('.src/database/database.js');
const users = require('./src/routes/route-user.js');
const getRankig = require('./src/routes/route-rank.js');
const getRecordOfPlayer = require('./src/routes/route-player-record.js')

app.use((req, res, next) => {
    console.log(req.headers);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    req.connection = connection;
    next();
});

app.use('/users', users);
app.use('/users/game/', getRankig)
app.use('/game/', getRecordOfPlayer)

app.listen(port, () => {
    console.log('Server runing.');
})
