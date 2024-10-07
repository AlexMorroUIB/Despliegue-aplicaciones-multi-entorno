const mariadb = require('mariadb');

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PWD = 'pass'

async function DBConnect() {
    return (await mariadb.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PWD
    })).isValid();
}

module.exports = {
    DBConnect/*,
    async DBGetAvailability() {
        return await dbConn.ping();
    }*/
}
