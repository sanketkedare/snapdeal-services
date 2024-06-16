const mongoose = require("mongoose");

const connectToDB = async () => {
  // const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/Snapdeal";
  const DB_URL ="mongodb://localhost:27017/Snapdeal";

  try 
  {
    // Connecting to MongoDB
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectToDB;
