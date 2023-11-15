const fs = require('fs');
const bioData = {
    name: 'Junaid',
    age: '24',
    college: 'uaf'
}

// Basic Example
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

const objData = JSON.parse(jsonData);
// console.log(objData);


// Practice

const userJsonData = JSON.stringify(bioData);

fs.writeFile('userJson.json', userJsonData, (err) => {
    console.log("data send to json file successfully")
})

fs.readFile('userJson.json', 'utf-8', (err, data) => {
    const userData = JSON.parse(data)
    console.log(userData)
})