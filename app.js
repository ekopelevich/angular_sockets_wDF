var Express = require('express');
var app = Express();
var http = require('http');
var Socket = require('socket.io');
var server = http.Server(app); // need to run seperate servers for io and http and need to make them play well together
var io = Socket(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', )

server.listen(8080, function(){
  console.log('Listening on port 8080');
});

module.exports = app;
