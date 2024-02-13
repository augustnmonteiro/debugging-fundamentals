const express = require('express');
const router = express.Router();

const { getRanking } = require('../modules/databaseOperations'); 

router.get('/rank/:rankType', async (req, res) => {
    const { rankType } = req.params;
    const limit = parseInt(req.query.limit) || 3;

    try {
        const ranking = await getRanking(req.connection, rankType, limit, res);

        if (ranking.length === 0) {
            res.status(404).json({ msg: "Ranking Not Found." });
        } else {
            res.status(200).json({ ranking });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving rank." });
    }
});

module.exports = router;
