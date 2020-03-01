var mongoose = require('mongoose');

var blockSchema = new mongoose.Schema({
    
    index: Number,
	timestamp: Date,
	data: Array,
	previousHash: String,
	hash: String, 
	nonce: Number
    
});

module.exports = mongoose.model('Block', blockSchema);