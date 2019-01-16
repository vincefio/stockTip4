var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    name: String,
    id: String
});

//create model
var Stock = mongoose.model('Stock', stockSchema);
/*Stock.remove({}, function (err) {
    console.log('collection removed')
})
*/
module.exports = Stock