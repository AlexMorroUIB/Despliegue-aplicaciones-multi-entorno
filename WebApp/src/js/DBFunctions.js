const mariadb = require('mariadb');

DB_HOST = 'localhost:'
DB_NAME = 'webdata'
DB_USER = 'root'
DB_PWD = 'pass'

const serverPool = mariadb.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PWD, //connectionLimit: 10,
    database: DB_NAME, //Default database to use when establishing the connection
    //port: 3306, //it uses the port 3306 by default
    timezone: 'Z', //UTC timezone
    resetAfterUse: true,
    idleTimeout: 20,
    connectionLimit: 10,
});

module.exports = {
    DBGetAvailability(asd) {
        asd = serverPool.getConnection((err) => {
            return err == null;
        })
    }
}