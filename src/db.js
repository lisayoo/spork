const mongoose = require("mongoose");

// const mongoURL = process.env.ATLAS_SRV;
const mongoURL = "mongodb+srv://kwicks:admin@cluster0-99k99.mongodb.net/test?retryWrites=true";
const options = { };

// connects to MongoDB
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise; // <- will explain what this is next week
const dbConnection = mongoose.connection;
// error handler
dbConnection.on('error', console.error.bind(console, 'connection error:'));
// optional: run when connection is successful
dbConnection.on('connected', function() {
      console.log('database connected');
});
