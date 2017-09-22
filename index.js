const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`Но зла Юнона, суча дочка,<br>
    Розкудкудакалась, як квочка, — `);
});

server.listen(process.env.PORT);
