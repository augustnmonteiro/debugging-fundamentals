const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT;

const connection = require('./src/database/database');
const users = require('./src/routes/route-user');
const rank = require('./src/routes/route-rank');
const getRecordOfPlayer = require('./src/routes/route-player-record')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    req.connection = connection;
    next();
});

app.use('/users', users);
app.use('/users/game/', rank)
app.use('/game/', getRecordOfPlayer)

app.listen(port, () => {
    console.log('Server running.');
});
