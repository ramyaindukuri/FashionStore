const http=require ('http');

const index=require('./index');

const server=http.createServer();

server.listen(3000, '0.0.0.0', () => console.log('Server has started on port 3000'));