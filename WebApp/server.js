const express = require('express')
const path = require('path')
const http = require('http')
const https = require('https')
const fs = require('fs')
const PORT = 443
const options = {
    pfx: fs.readFileSync("ssl/AlexMorro.pfx"),
    passphrase: "1234"
}
const DBFunctions = require('./DBFunctions.js');

const app = express()

app.use(express.static(path.join(__dirname, 'src')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.get('/dbConnection', () => {
    return { ok: false }
    //return DBFunctions.dbConn.getConnection()
    //return DBFunctions.DBGetAvailability()
});

https.createServer(options, app).listen(PORT);
//http.createServer(app).listen(PORT);

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
})

process.on('unhandledRejection', (error, promise) => {
    console.log(promise)
    console.log(error);
});