const http = require('http');

http.createServer(function(request, response) {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('hello world')
  response.end();
})