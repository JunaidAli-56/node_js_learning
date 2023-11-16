const fs = require('fs')
const http = require('http')
const port = 8000;

const server = http.createServer()

server.on('request', (req, res) => {
    // simple method
    // fs.readFile('input.txt', (err, data) => {
    //     if (err) console.log(err.message)
    //     res.end(data.toString())
    // })

    // Stream METHODS
    const readableStream = fs.createReadStream('info.txt');
    readableStream.on('data', (chunkData) => {
        res.write(chunkData)
    })
    readableStream.on('end', () => {
        res.end()
    })
})

server.listen(port, "127.0.0.1", () => {
    console.log(`Listening on port: ${port}`)
})