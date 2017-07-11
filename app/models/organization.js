var mongoose  = require('./dbConnection');

/**
* Organization schema
*/
var orgSchema = new mongoose.Schema({
  name               : String,
  description        : String,
  location           : String,
  logo               : String
});

/**
* This model method is use for to retrieve organizations list
*/
orgSchema.methods.retrieveOrgList = function retrieveOrgList(request, reply) {
  organizations.find({}, {name:1, _id:0}, function(err, resData) {
    if(err) {
      reply(err)
    } else {
      reply(resData)
    }
  })
}

/**
* This model method is use for to retrieve selected organization details
*/
orgSchema.methods.retrieveOrgDetails = function retrieveOrgDetails(request, reply) {
  organizations.findOne({name: request.params.orgName}, function(err, resData) {
    if(err) {
      reply(err)
    } else {
      reply(resData)
    }
  })
}

/**
* This model method is use for to save the organization details
*/
orgSchema.methods.saveOrgDetails = function saveOrgDetails(request, reply) {
  const details = request.payload;
  organizations.update({name:details.orgName}, {$set: details}, {upsert:true}, function(err, resData) {
    if(err) {
      reply(err)
    } else {
      reply(resData)
    }
  })
}

/**
* This model method is use for to update the existing organization details
*/
orgSchema.methods.updateOrgInfo = function updateOrgInfo(request, reply) {
  let data = request.query;
  organizations.update({name:request.params.orgName}, {$set:data}, {upsert:true}, function(err, resData) {
    if(err) {
      reply(err)
    } else {
      reply(resData)
    }
  })
}

var organizations = mongoose.dbConnection.model('organizations', orgSchema);
module.exports   = organizations;
