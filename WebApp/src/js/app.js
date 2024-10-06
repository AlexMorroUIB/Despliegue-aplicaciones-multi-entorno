const http = require('http')
const https = require('https')
const fs = require('fs')
const PORT = 443
const options = {
    pfx: fs.readFileSync("src/ssl/AlexMorro.pfx"),
    passphrase: "1234"
}

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('src/index.html', function (err, data) {
        if (err) {
            res.writeHead(404)
            fs.readFile('src/index.html', function (err, data) {
                if (err) {
                    res.writeHead(404)
                    res.write('Error 404: File not found')
                } else {
                    res.write(data)
                }
            })
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT, function (error) {
    if (error) {
        console.log('Error: ', error)
    }
})
