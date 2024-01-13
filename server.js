const http = require('http');
const server = http.createServer((request, response) => {
    console.log('Server is running', request.method, request.url);
    // console.log('HTTP Method', request.method, request.url);
    // console.log('HTTP Headers', request.headers);
    // console.log('HTTP Url:', request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello, World!</h1>');
});

server.listen(8000);