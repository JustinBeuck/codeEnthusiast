var mongoose = require('mongoose');

module.exports = mongoose.model('Email', {
	text : {
    type : String, 
    default: ''
  }
});
