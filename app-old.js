const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'content-Type': 'application/json' });

    let salida = {
        nombre: 'Jordan',
        edad: 23,
        url: req.url
    }

    res.write(JSON.stringify(salida))
        // res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log('Escuchando puerto 8080');