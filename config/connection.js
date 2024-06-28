const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/sociallinkDB';

connect(connectionString);

// Establish the connection
connectToDatabase();

// Export the connection
module.exports = connection;
