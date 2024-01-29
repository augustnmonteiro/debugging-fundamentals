const express = require('express');
const app = express();
const PORT = 8180;
app.use(express.json());

const connection = require('./database/database');
const users = require('./routes/route-user');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    req.connection = connection;
    next();
});

app.use('/users', users);

app.listen(PORT, () => {
    console.log('Server runing.' );
})