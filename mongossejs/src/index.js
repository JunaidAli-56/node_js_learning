const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongo")
    .then(() => {
        console.log("Connected..")
    })
    .catch((err) => console.log(err))

// define schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    sex: String,
    dob: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// collection creation
const UserModel = new mongoose.model('UserModel', userSchema);

// Single doc insert
// const createDoc = async () => {
//     try {
//         const user = new UserModel({
//             name: 'junaid ali',
//             age: 23,
//             sex: 'male',
//             dob: "30/05/1999",
//             active: true,
//         })
//         const result = await user.save();
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Many doc insert
const createDoc = async () => {
    try {
        const userLali = new UserModel({
            name: 'Lali',
            age: 22,
            sex: 'male',
            dob: "30/05/2000",
            active: true,
        })
        const user2x = new UserModel({
            name: 'usama',
            age: 22,
            sex: 'male',
            dob: "30/05/2000",
            active: true,
        })
        const result = await UserModel.insertMany([userLali, user2x]);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
// createDoc();

// Read document
const readDoc = async () => {
    try {
        // it will read or show aa documents.
        const result = await UserModel.find();
        // it will show only age 23 documents
        const result1 = await UserModel.find({ age: 23 });
        // it will show only name fields of all docs. and '1' represent to show the doc
        const result2 = await UserModel.find().select({ name: 1 });
        // it will show the number of  documents of a collection
        const result3 = await UserModel.find().limit(2);
        // it will count the number of documents matching with query or expression 
        const resultCount = await UserModel.find({ name: 'junaid' }).count();
        const resultSort = await UserModel.find().select({ name: 1 }).sort({ name: -1 });

        console.log(resultSort)

        // with comparison operators
        const result4 = await UserModel.find({ age: { $gt: 22 } });
        const result5 = await UserModel.find({ age: { $lt: 22 } });
        const result6 = await UserModel.find({ age: { $lte: 22 } });

        // $in operator matches the value of specfied in an Array.
        const result7 = await UserModel.find({ name: { $in: ['junaid', 'ali'] } });
        // $nin operator matches none the value of specfied in an Array means show those vaue whose not specified in an array
        const result8 = await UserModel.find({ name: { $nin: ['junaid', 'ali'] } });
        // console.log(result8)


        // with logical operators
        const result9 = await UserModel.find({ $or: [{ name: 'junaid' }, { age: 23 }] })
        const result10 = await UserModel.find({ $and: [{ name: 'junaid' }, { age: 23 }] })
        const result11 = await UserModel.find({ $nor: [{ name: 'junaid' }, { age: 23 }] })

        // If you simply want to find documents where a field is not equal to a particular value, use $ne.
        // If you need more complex negation or want to express conditions that are not directly handled by $ne, you might use $not.

        // const result12 = await UserModel.find({ name: { $ne: "junaid" } });
        const result13 = await UserModel.find({ age: { $not: { $gt: 22 } } })
        // console.log(result13)
    } catch (error) {
        console.log(error)
    }
}
readDoc();

// 2nd method for Connection.
// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://127.0.0.1:27017/mongo';

// mongoose.connect(mongoURI);

// const db = mongoose.connection;

// db.on('error', (err) => {
//     console.error(`MongoDB connection error: ${err}`);
// });

// db.once('open', () => {
//     console.log('Connected to MongoDB');
//     // Your code here
// });
