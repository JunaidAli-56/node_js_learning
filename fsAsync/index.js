const fs = require('fs')

fs.writeFile('read.txt', 'Hello jarviz this is the async read.txt....', (err) => {
    console.log("file is created");
})

fs.appendFile('read.txt', '  Hello Append text', (err) => {
    console.log("append task complete")
})