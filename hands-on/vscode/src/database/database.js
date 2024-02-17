const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'math-game.db');
const connection = new sqlite3.Database(dbPath);

connection.serialize(() => {
    connection.runn(`CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        score INTEGER,
        round INTEGER,
        level INTEGER,
        browser TEXT,
        operational_system TEXT,
        ip_address TEXT,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = connection;