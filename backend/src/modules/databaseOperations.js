const handleDatabaseError = (res, error) => {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error.');
};

const getAllUsersFromDatabase = (connection, res) => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM players';

        connection.query(query, (error, result) => {
            if (error) {
                handleDatabaseError(res, error);
                reject(error);
            } else {
                resolve(result);
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

        connection.query(query, values, (error, results) => {
            if (error) {
                handleDatabaseError(res, error);
                reject(error);
            } else {
                console.log('Registration entered successfully:', results);
                resolve();
            }
        });
    });
};

const  getRanking = (connection, rankType, limit, res) => {
    return new Promise((resolve, reject) => {
        let timeFrameCondition;
        let dateFormat;

        switch (rankType) {
            case "DAILY":
                timeFrameCondition = "DATE(date) = CURRENT_DATE()";
                dateFormat = "%Y-%m-%d";
                break;
            case "WEEKLY":
                timeFrameCondition = `YEARWEEK(date, 1) = YEARWEEK(CURRENT_DATE(), 1)`;
                dateFormat = "%Y-%u";
                break;
            case "MONTLHY":
                timeFrameCondition = `DATE_FORMAT(date, '%Y-%m') = DATE_FORMAT(CURRENT_DATE(), '%Y-%m')`;
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
            FROM players
            WHERE ${timeFrameCondition}
            GROUP BY username, level, round, DATE_FORMAT(date, ?)
            ORDER BY score DESC LIMIT ?
        `;

        connection.query(queryRank, [dateFormat, limit], (error, results) => {
            if (error) {
                handleDatabaseError(res, error)
                reject(error);
            } else {
                if (results.length > 0) {
                    resolve(results);
                } else {
                    resolve([]);
                }
            }
        });
    });
}

const getRecordOfPlayer = (connection, username, period, res) => {
    return new Promise((resolve, reject) => {
        if(username && period) {
            let timeFrameCondition;
            
            switch (period) {
                case "DAILY":
                    timeFrameCondition = "DATE(date) = CURRENT_DATE()";
                    break;
                case "WEEKLY":
                    timeFrameCondition = "YEARWEEK(date, 1) = YEARWEEK(CURRENT_DATE(), 1)";
                    break;
                case "MONTHLY":
                    timeFrameCondition = "DATE_FORMAT(date, '%Y-%m') = DATE_FORMAT(CURRENT_DATE(), '%Y-%m')";
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
              
            connection.query(querySqlRecord, [username], (error, results) => {
                if(error) {
                    handleDatabaseError(res, error)
                    reject(error)
                } else {
                    if(results.length > 0) {
                        resolve(results)
                    } else {
                        resolve([])
                    }
                }
            })
        } else {
            reject("Username or period is invalid.")
        }
    })
}

module.exports = {
    getAllUsersFromDatabase,
    insertUserIntoDatabase,
    getRanking,
    getRecordOfPlayer
};