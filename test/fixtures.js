var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exampleSchema = new Schema({
	description: String,
	number: Number
});

var example =  mongoose.model('example', exampleSchema);

module.exports = {
	example: example
};
