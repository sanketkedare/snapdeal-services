// Importing the main application from the src folder
const app = require('./src/app.js');

// Importing the database connection function
const connectToDB = require("./src/Config/connectToDB");

// Importing the cors middleware to enable Cross-Origin Resource Sharing
const cors = require('cors');

// Loading environment variables from a .env file into process.env
require("dotenv").config();

// Setting the port number from the environment variable or default to 3001
const PORT = process.env.PORT || 3001;

// Applying the CORS middleware to the app
app.use(cors());

// Connecting to the database
connectToDB();

// Starting the server and listening on the specified port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
