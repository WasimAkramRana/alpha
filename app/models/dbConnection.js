var mongoose          = require('mongoose');
var config            = require('../../configs/index.json')
mongoose.dbConnection = mongoose.createConnection(config.dbURI);
module.exports        = mongoose;
