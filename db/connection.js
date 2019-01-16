var mongoose = require('mongoose');

mongoose.connect('mongodb://root:rootuser1@ds045147.mlab.com:45147/stocktrade', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Mongoose DB connected!')
});

module.exports = db