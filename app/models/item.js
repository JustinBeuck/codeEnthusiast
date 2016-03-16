var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    techCompany : String,
    prices : Number,
    apparelType : String,
    colors : Array,
    availableSizes : Array,
    itemName : String
});