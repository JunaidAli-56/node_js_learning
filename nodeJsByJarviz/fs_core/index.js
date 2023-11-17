const fs = require("fs");

// *  make directory mkdir and for remove rmdir method
// Create a new file
fs.writeFileSync('read.txt', 'hello Jarviz, can you hear me.');
fs.appendFileSync('read.txt', ' Alright lets do some work togther. Are you ready?');

// read data 
// remember the buff concept
const buff_data = fs.readFileSync('read.txt');
original_data = buff_data.toString();
console.log(original_data);
// 2nd method to read data without buff
const data = fs.readFileSync('read.txt', 'utf8');
console.log(data)

// rename file
// fs.renameSync('read.txt', 'readWrite.txt');

// delete the file
// fs.unlinkSync('read.txt');