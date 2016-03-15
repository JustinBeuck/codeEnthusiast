var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    techCompany : String,
    prices : Array,
    apparelType : Array,
    colors : Array,
    availableSizes : Array
});