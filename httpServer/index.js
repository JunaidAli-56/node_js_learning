const http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
    res.end('Hello Jarviz from another world');
})

server.listen(port, "127.0.0.1", () => {
    console.log(`listening the server on port: ${port}`)
})