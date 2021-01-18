var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200, {'content': 'text/html'});
    response.write('test');
    response.end();
}).listen(8799);

console.log('server running at http://localhost:8799');