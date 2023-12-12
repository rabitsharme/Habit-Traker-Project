// importing mongoose
const mongoose = require('mongoose');

// getting database url from env variables
//const { MONGODB_URL } = process.env;

// connect to database
exports.connect = () => {
    // connecting
    mongoose.connect("mongodb://localhost:27017/habitTracker", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        // if database connected
        console.log('Database is connected succ/habitTrackeressfully');
    })
    .catch((error) => {
        // if there is some error
        console.log('Database connection failed');
        console.error(error);
        process.exit(1);
    });
};