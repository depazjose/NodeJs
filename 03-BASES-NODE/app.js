const { crearArchivo } = require('./multiplicar/multiplicar.js');
let base = 'abc';

//console.log(multiplicar);



crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));