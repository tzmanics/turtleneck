var mongoose = require('mongoose');

module.exports = mongoose.model('Presenter', {
  name: { type: String, default: 'Presenter' }
});
