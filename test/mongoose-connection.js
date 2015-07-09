var mongoose = require('mongoose');
var mongooseConnectionURI = 'mongodb://localhost/node-document-tags';

mongoose.connection.on('error', function(err) {
	console.log('MongoDB connection error', err);
});

// Connect to Mongoose using our database config.
mongoose.connect(mongooseConnectionURI, {
	server: {
		read_secondary: true
	}
});

module.exports = mongoose;
