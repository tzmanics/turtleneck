var mongoose = require('mongoose');

module.exports = mongoose.model('Presenter', {
  name   : {type: String, default: 'Presenter'},
  avatar : {type : String, url: String, default: 'img/default.jpg'}
});