var Hapi       = require('hapi');
var org        = require('../models/organization');
var orgModel   = new org();

/**
* This model method is use for to perform get organization name list
*/
module.exports.getOrgList = function(request, reply) {
  orgModel.retrieveOrgList(request, reply);
}

/**
* This model method is use for to perform get selected organization details
*/
module.exports.getOrgDetails = function(request, reply) {
  orgModel.retrieveOrgDetails(request, reply);
}

/**
* This model method is use for to perform save new organisation details
*/
module.exports.createOrganization = function(request, reply) {
  orgModel.saveOrgDetails(request, reply);
}

/**
* This model method is use for to update existing organisation details
*/
module.exports.updateOrgDetails = function(request, reply) {
  orgModel.updateOrgInfo(request, reply);
}
