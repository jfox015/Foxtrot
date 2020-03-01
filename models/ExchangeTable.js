var mongoose = require('mongoose');

var exchangeTableSchema = new mongoose.Schema({
    
    type: String,
    symbol: String,
    from: String,
    precision: Number,
    conv: Number,
    dateCreated: Date,
    lastModified: Date
    
});

module.exports = mongoose.model('ExchangeTable', exchangeTableSchema);