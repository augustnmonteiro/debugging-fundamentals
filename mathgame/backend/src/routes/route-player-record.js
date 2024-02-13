const express = require('express');
const router = express.Router();

const { getRecordOfPlayer } = require('../modules/databaseOperations')


router.get('/:username/record/:period', async (req, res) => {
    const {username, period} = req.params;

    try {
        const dataRecordPlayer = await getRecordOfPlayer(req.connection, username, period);

        if (dataRecordPlayer.length > 0) {
            res.status(200).json({ dataRecordPlayer});
        } else {
            res.status(404).json({ msg: "Record of player Not Found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: error});
    }
});

module.exports = router;