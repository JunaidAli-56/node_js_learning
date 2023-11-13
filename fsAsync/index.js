const fs = require('fs')

fs.writeFile('read.txt', 'Hello jarviz this is the async read.txt....', (err) => {
    console.log("file is created");
})

fs.appendFile('read.txt', '  Hello Append text', (err) => {
    console.log("append task complete")
})

fs.readFile('read.txt', 'UTF-8', (err, data) => {
    console.log(data)
})