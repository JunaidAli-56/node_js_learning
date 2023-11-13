const fs = require("fs");

// Create a new file
fs.writeFileSync('read.txt', 'hello Jarviz, can you hear me.');
fs.appendFileSync('read.txt', ' Alright lets do some work togther. Are you ready?');