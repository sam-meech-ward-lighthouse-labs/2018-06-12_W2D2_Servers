var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {

  var url = req.url;
  var method = req.method;

  var message = "Hello world\n";

  if(url === '/elephant' && method === 'GET') {
    // message = "Hello Elephant, looking big today\n";
    message = "<html><head><title>Elephant</title></head><body></body>"
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(message);
  }
  else if(url == '/boat') {
    message = "Hello Boat, looking very big today\n";
  }
  // Elephant
  // Boat
  // Blue Whale

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(message));
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});