var mongoose = require('mongoose');

var currencySchema = new mongoose.Schema({
    
    type: String,
    name: String,
    symbol: String,
    exchangeRates: Array,
    char: String,
    charCode: String,
    dateCreated: Date,
    lastModified: Date,
    lastModifiedBy: String
    
});

module.exports = mongoose.model('Currency', currencySchema);