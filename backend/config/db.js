require('dotenv').config()

const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrIPaser: true,
            // useUnifiedTopology: true
        });

        console.log("MongoDB Connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDb;