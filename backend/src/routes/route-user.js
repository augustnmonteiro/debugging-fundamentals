const express = require('express');
const router = express.Router();

function getUsers(req, res) {
    req.connection.query('SELECT * FROM `math-game`.players', (error, result) => {
        if(error) {
            res.send(error);
            return
        }
        res.send(result);
    })
}
router.get('/', getUsers)

module.exports = router;