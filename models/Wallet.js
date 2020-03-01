var mongoose = require('mongoose');

var walletSchema = new mongoose.Schema({
    
    ownerId: String,
    status: String,
    baseCurrency: String,
    balance: Number,
    coin: String,
    coinBalance: Number,
    address: String,
    status: String,
    dateCreated: Date,
    lastModified: Date,
    lastModifiedBy: String
    
});

module.exports = mongoose.model('Wallet', walletSchema);