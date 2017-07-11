var mainCtrl  = require('../controllers/mainController');

var baseRoutes = {
  register:function(server, option, next) {
    var routes = [
      {
          method  : 'GET',
          path    : '/v1/organizations',
          handler : mainCtrl.getOrgList
      },
      {
          method: 'GET',
          path: '/v1/organizations/{orgName}',
          handler: mainCtrl.getOrgDetails
      },
      {
          method: 'POST',
          path: '/v1/organizations',
          handler: mainCtrl.createOrganization
      },
      {
          method: 'PUT',
          path: '/v1/organizations/{orgName}',
          handler: mainCtrl.updateOrgDetails
      },

    ];
    server.route(routes);
    next();
  }
};

/**
* Define the registerd router object attributes 
*/
baseRoutes.register.attributes = {
  name: 'baseRoutes',
  version: '1.0.0'
}

module.exports = baseRoutes;
