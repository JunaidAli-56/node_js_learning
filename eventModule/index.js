const EventEmitter = require("events");

const event = new EventEmitter();

// registering for single or once.
// on() method is use for defining and emit() is user for calling the function. in future search on them if u wanna revise it. 
event.on('myName', () => {
    console.log("Jarviz")
})
event.emit('myName')

// registering for events with multiple callback functions.
// we different things with one event like show alert, console and etc with one event.
event.on('userData', () => {
    console.log("Friday")
})
event.on('userData', () => {
    console.log("0.3 sec")
})
event.on('userData', () => {
    console.log("Sokovia")
})
event.emit('userData')


// registering for events with multiple callback paramtere or arguments.
event.on('checkPage', (statusCode, msg) => {
    console.log(`Page status code is ${statusCode} and the message is ${msg}`)
})
event.emit('checkPage', 200, 'ok')
