var hapi     = require('hapi');
var good     = require('good');

var server   = new hapi.Server('0.0.0.0', 
               parseInt(process.env.PORT, 10) || 3000);

server.route({
  method: 'GET',
  path:   '/',
  handler: function (req, res) {
    res('Hello World');
  }
});

server.route({
  method: 'GET',
  path:   '/{name}',
  handler: function (req, res) {
    res('Hello, ' + encodeURIComponent(req.params.name) +
      '!');
  }
});

server.pack.register(good, function (err) {
  if (err) {
    throw err;
  };
  server.start(function () {
    console.log('Server running at: ' +  server.info.uri);
  });
});