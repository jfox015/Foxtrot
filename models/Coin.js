var mongoose = require('mongoose');

var coinSchema = new mongoose.Schema({
    
    name: String, // Ticker name of the given cryptocurrency.
	symbol: String, //Ticker symbol of the given cryptocurrency (usually the same as the name).
	coinName: String, //Name of the given cryptocurrency.
	fullName: String, //Name of the given cryptocurrency concatenated with the symbol (Ex: Ethereum (ETH)).
	algorithm: String, //Name cryptographic algorithm for that coin.
	proofType: String, //The proof type of the cryptocurrency.
    dateCreated: Date,
    lastModified: Date
	
});

module.exports = mongoose.model('Coin', coinSchema);