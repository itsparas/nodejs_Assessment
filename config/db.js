const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose
    .connect(MONGO_URI)
    .then((data) => console.log("db connected"))
    .catch((err) => console.log(err.message));
};

module.exports = connectDB;
