const { add, sub, userData } = require('./oper');
console.log(add(7, 5));
console.log(sub(7, 5));

console.log(`user id is: ${userData.uId} and user is ${userData.firstName} ${userData.lastName}`)
console.log(userData)