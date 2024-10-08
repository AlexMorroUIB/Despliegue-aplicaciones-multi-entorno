const mariadb = require('mariadb');
const {createClient} = require('redis');
const client = createClient({
    socket: {
        host: 'redis'
    }
});

// redis connection errors
client.on('error', async (err) => {
    console.log('Redis Client Error', err)
    await client.disconnect()
});
// Connect to redis
client.connect().catch(() => console.log("redis disconnected"))

const DB_HOST = 'mariadb'
const DB_USER = 'user'
const DB_PWD = 'pass'

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


module.exports = {
    DBConnect,
    redisConnect
}
