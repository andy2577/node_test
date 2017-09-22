const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(
        `Еней був парубок моторний<br/>
	І хлопець хоть куди козак,<br/>
    Удавсь на всеє зле проворний,<br><br>
    Завзятіший од всіх бурлак.<br><br>
    Но греки, як спаливши Трою,<br/>
    Зробили з неї скирту гною,<br/><br>
    Він, взявши торбу, тягу дав;<br/>
    Забравши деяких троянців,<br/><br/>
	Троянців насажавши повні,<br>
    І куди очі почухрав.<br><br>
    Но зла Юнона, суча дочка,<br>
    Розкудкудакалась, як квочка, — <br><br>
	Енея не любила — страх;<br>
	Давно уже вона хотіла<br><br>`);
});

server.listen(process.env.PORT);