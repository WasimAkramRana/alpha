const Hapi     = require('hapi');
const server   = new Hapi.Server();
const config   = require('./configs/index.json');

/**
* This block of code is use for to create server connection
*/
server.connection({
  port: config.appPort,
  host: config.appHostServer
});

/**
* This block of code is use for to require the router files
*/
server.register([{
  register: require('./app/routes/router')
}], function(err) {
  if(err) {
    console.log(err);
  }
});

/**
* This block of code is use for to start the server
*/
server.start(function(err) {
  if(err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
})
