// Create web server using http module

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}   );

server.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
    }
);