const mongoose = require("mongoose")

async function connectDb(){
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("Mongo URI not set")
    await mongoose.connect(uri);
    console.log("MongoDB connected")
}

module.exports = connectDb