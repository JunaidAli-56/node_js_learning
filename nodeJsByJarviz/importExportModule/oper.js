const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const userData = {
    uId: 1234,
    firstName: 'Junaid',
    lastName: "Hayat"
}

// module.exports.add = add;
module.exports = {
    add,
    sub,
    userData,
}