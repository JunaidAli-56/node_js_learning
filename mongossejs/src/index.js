// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/mongo")
//     .then(() => {
//         console.log("Connected..")
//     })
//     .catch((err) => console.log(err))

const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/mongo";

mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
    // Your code here
});
