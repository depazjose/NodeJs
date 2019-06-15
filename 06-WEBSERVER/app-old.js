const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: "jdepaz",
        apellido: "aaa",
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola server');
    res.end();
}).listen(8089);

console.log("Listening in th port 8089");