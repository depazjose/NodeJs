const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'José',
        anio: new Date().getFullYear()
    });
});


app.get('/data', function(req, res) {
    res.send('Hola Data')
});

app.listen(3000, () => {
    console.log('Escuchando peticiones el puerto 3000');
});