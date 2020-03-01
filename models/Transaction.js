var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
    
    type: String,
    timestamp: String,
    date: String,
    ownerAddress: String,
    thirdPartyAddress: String,
    signature: String,
    coin: String,
    amount: Number,
    hash: String,
    status: String,
    cost: Number,
    coinCost: Number

});

module.exports = mongoose.model('Transaction', transactionSchema);