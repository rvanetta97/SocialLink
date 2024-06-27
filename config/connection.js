const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/sociallinkDB';

// Function to establish connection to the database
async function connectToDatabase() {
  try {
    await connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

// Establish the connection
connectToDatabase();

// Export the connection
module.exports = connection;
