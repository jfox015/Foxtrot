var mongoose = require('mongoose');

var blockchainSchema = new mongoose.Schema({
    
    currency: String,
    chain: Array,
    dateCreated: Date,
    lastModified: Date
    
});

/**
 * Helper method.
 */
blockchainSchema.methods.getLastUpdate = function(cb) {
  cb(null, this.lastModified);
};

module.exports = mongoose.model('Blockchain', blockchainSchema);