const http = require('http');
const { type } = require('os');
const port = 8000;
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Hello Jarviz: Home Page")
    } else if (req.url == '/about') {
        res.end("about page")
    } else if (req.url == '/contact') {
        res.end("contact page")
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 Nothing here</h1>")
    }
})

server.listen(port, "127.0.0.1", () => {
    console.log(`listening the server on port: ${port}`)
})