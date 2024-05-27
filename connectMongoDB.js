const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://2211cs010324:2211cs010324@cluster0.e7ljsiz.mongodb.net/week12?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connection failed");
  }
};
module.exports = connectDB;
