const mariadb = require('mariadb');
const {createClient} = require('redis');
const {createPool} = require("mariadb");
const client = createClient({
    socket: {
        host: 'redis'
    }
});

// redis connection errors
client.on('error', async (err) => {
    await client.disconnect()
});
// Connect to redis
client.connect().catch(() => console.log("redis disconnected"))

const DB_HOST = 'localhost'
const DB_USER = 'user'
const DB_PWD = 'pass'
const DB_NAME = 'webdata'

let dbPool = mariadb.createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PWD,
        database: DB_NAME
    });

async function DBConnect() {
    let dbCon = await mariadb.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PWD
    })
    let res = dbCon.isValid();
    await dbCon.end();
    return res;
}

async function redisConnect() {
    if (!client.isReady) {
        await client.connect().catch(() => console.log("Error reconnecting"))
    }
    return client.isReady;
}

async function selectData() {
    dbPool.connect().then(conn => {
        conn.query("SELECT * FROM DUAL").then((rows) => {
            console.log(rows);
            conn.end();
        })
    })
    }

module.exports = {
    DBConnect,
    redisConnect,
    selectData
}
