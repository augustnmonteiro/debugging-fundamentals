const express = require('express');
const router = express.Router();
const { updateUser } = require('../modules/databaseOperations.js');

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
        await insertUserIntoDatabase(req.connection, user, res);
        res.status(200).json({msg: 'Registration Entered Successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error Internal Server.'});
    }
});

router.put('/:id', async (req, res) => {
    const updatedUserName = req.body.username; 
    const userId = parseInt(req.params.id);

    const browser = req.useragent.browser;
    const os = req.useragent.os;
    const ip_address = req.clientIp;
    
    if(!updatedUserName) {
        res.status(404).json({msg: "Bad Request."});
        return;
    }
    const user = { 
        username: updatedUserName, 
        operationalSystem: os, 
        browser, ipAddress: ip_address, 
        id: userId 
    };

    try {
        await updateUser(req.connection, user, res);
        res.status(200).json({ msg: 'User Updated Successfully!' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ msg: 'Error updating user:' });
    }
});

module.exports = router;