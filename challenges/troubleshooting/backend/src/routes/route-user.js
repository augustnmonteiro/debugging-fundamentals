const express = require('express');
const router = express.Router();
const { getAllUsersFromDatabase, insertUserIntoDatabase } = require('../modules/databaseOperations.js');

router.get('/', async (req, res) => {
    try {
        const result = await getAllUsersFromDatabase(req.connection, res);
        if (result.length === 0) {
            res.status(404).json({msg: "Not found."});
        } else {
            res.send(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Internal Server.');
    }
});

router.post('/insertUsers',  async (req, res) => {
    const { username, score, round, level } = req.body;
    const browser = req.useragent.browser;
    const os = req.useragent.os;
    const ip_address = req.clientIp;

    const user = { username, score, round, level, os, browser, ip_address };

    try {
        await insertUserIntoDatabase(req.connection, users, res);
        res.status(200).json({msg: 'Registration Entered Successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error Internal Server.'});
    }
});

module.exports = router;