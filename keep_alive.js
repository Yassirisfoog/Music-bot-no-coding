//to keep ur repl.it and glitch project open
var server = require('http').createServer(function(req, res) {
  console.log(new Date(), "Request ", req.method);
  res.end("Nice");
});

server.timeout = 10000;

server.on("connection", function(socket) {
  console.log("New connection");
  socket._created = new Date().getTime();
  socket.on("close", function() {
    var now = new Date().getTime();
    console.log(new Date(), "Socket closed, TTL", (now - socket._created)/1000);
  });
});
server.listen(3000);
