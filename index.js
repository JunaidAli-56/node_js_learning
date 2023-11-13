const fs = require("fs");

// Create a new file
fs.writeFileSync('read.txt', 'hello Jarviz, can you hear me.');
fs.appendFileSync('read.txt', ' Alright lets do some work togther. Are you ready?');

// read data 
// remember the buff concept
const buff_data = fs.readFileSync('read.txt');
original_data = buff_data.toString();
console.log(original_data);