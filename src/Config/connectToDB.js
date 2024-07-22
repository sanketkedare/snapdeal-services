const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectToDB = async () => {
  // Setting the MongoDB URL from the environment variable or default to local MongoDB
  const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/Snapdeal";

  try {
    // Connecting to MongoDB with options to use the new URL parser and unified topology
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    // Logging any connection errors
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectToDB;
