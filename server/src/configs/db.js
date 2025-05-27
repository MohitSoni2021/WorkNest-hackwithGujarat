const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/");
};

module.exports = connect;