const handleDatabaseError = (res, error) => {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error.');
};

const getAllUsersFromDatabase = (connection, res) => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM player';

        connection.all(query, (error, rows) => {
            if (error) {
                handleDatabaseError(res, error);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};

const insertUserIntoDatabase = (connection, user, res) => {
    return new Promise((resolve, reject) => {
        const { username, score, round, level, os, browser, ip_address } = user;

        const query = `
            INSERT INTO players (username, score, round, level, browser, operational_system, ip_address)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [username, score, round, level, os, browser, ip_address];

        connection.run(query, values, (error) => {
            if (error) {
                handleDatabaseError(res, error);
                reject(error);
            } else {
                console.log('Registration entered successfully:', this.lastID);
                resolve(this.lastID);
            }
        });
    });
};


const getRanking = (connection, rankType, limit, res) => {
    return new Promise((resolve, reject) => {
        let timeFrameCondition;
        let dateFormat;

        switch (rankType) {
            case "DAILY":
                timeFrameCondition = "date(date) = date('now')";
                dateFormat = "%Y-%m-%d";
                break;
            case "WEEKLY":
                timeFrameCondition = "strftime('%Y-%W', date) = strftime('%Y-%W', 'now')";
                dateFormat = "%Y-%W";
                break;
            case "MONTHLY":
                timeFrameCondition = "strftime('%Y-%m', date) = strftime('%Y-%m', 'now')";
                dateFormat = "%Y-%m";
                break;
            default:
                res.status(400).json({ msg: "Invalid rank type." });
                return;
        }

        const queryRank = `
            SELECT username, level, round, 
            MAX(score) AS score, 
            RANK() OVER (ORDER BY MAX(score) DESC) AS position
            FROM player
            WHERE ${timeFrameCondition}
            GROUP BY username, level, round, strftime('${dateFormat}', date)
            ORDER BY score DESC LIMIT ?
        `;

        connection.all(queryRank, [limit], (error, rows) => {
            if (error) {
                handleDatabaseError(res, error);
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};

const getRecordOfPlayer = (connection, username, period, res) => {
    return new Promise((resolve, reject) => {
        if (username && period) {
            let timeFrameCondition;

            switch (period) {
                case "DAILY":
                    timeFrameCondition = "date(date) = date('now')";
                    break;
                case "WEEKLY":
                    timeFrameCondition = "strftime('%Y-%W', date) = strftime('%Y-%W', 'now')";
                    break;
                case "MONTHLY":
                    timeFrameCondition = "strftime('%Y-%m', date) = strftime('%Y-%m', 'now')";
                    break;
                default:
                    res.status(400).json({ msg: "Invalid period." });
                    return;
            }

            const querySqlRecord = `
                SELECT 
                MAX(score) AS max_score,
                MAX(level) AS max_level,
                MAX(round) AS max_round,
                SUM(score) AS total_score,
                SUM(round) AS total_rounds_played
                FROM players WHERE username = ? AND ${timeFrameCondition};
            `;

            connection.all(querySqlRecord, [usernames], (error, rows) => {
                if (error) {
                    handleDatabaseError(res, error);
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        } else {
            reject("Username or period is invalid.");
        }
    });
};

module.exports = {
    getAllUsersFromDatabase,
    insertUserIntoDatabase,
    getRanking,
    getRecordOfPlayer
};