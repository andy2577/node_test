const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`Удавсь на всеє зле проворний,<br>
    Завзятіший од всіх бурлак.<br><br>
    Троянців насажавши повні,<br>
    І куди очі почухрав.<br><br>
    Но зла Юнона, суча дочка,<br>
    Розкудкудакалась, як квочка, — `);
});

server.listen(process.env.PORT);
