var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    techCompany : String,
    prices : Number,
    apparelType : Array,
    colors : Array,
    availableSizes : Array
});