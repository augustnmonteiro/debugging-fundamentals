const handleDatabaseError = (res, error) => {
    console.error('Erro no banco de dados:', error);
    res.status(500).send('Erro interno do servidor');
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
                console.log('Registro inserido com sucesso:', results);
                resolve();
            }
        });
    });
};

module.exports = {
    getAllUsersFromDatabase,
    insertUserIntoDatabase
};