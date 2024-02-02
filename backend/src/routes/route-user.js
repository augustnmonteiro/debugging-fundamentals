const express = require('express');
const router = express.Router();
const { getAllUsersFromDatabase, insertUserIntoDatabase } = require('../modules/databaseOperations.js');

router.get('/', async (req, res) => {
    try {
        const result = await getAllUsersFromDatabase(req.connection, res);
        if (result.length === 0) {
            res.status(404).send('Nenhum dado encontrado');
        } else {
            res.send(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
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
        res.status(200).send('Registro inserido com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;