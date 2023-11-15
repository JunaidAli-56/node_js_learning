const http = require('http');
const fs = require('fs')
const port = 8000;
const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, 'utf-8')
    const objectData = JSON.parse(data);

    if (req.url == '/') {
        res.end("Hello Jarviz: Home Page")
    } else if (req.url == '/about') {
        res.end("about page")
    } else if (req.url == '/contact') {
        res.end("contact page")
    } else if (req.url == '/userapi') {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(objectData.users[0].name)
        console.log(objectData.users[0].name)
        // res.end("user api page")
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 Nothing here</h1>")
    }
})

server.listen(port, "127.0.0.1", () => {
    console.log(`listening the server on port: ${port}`)
})