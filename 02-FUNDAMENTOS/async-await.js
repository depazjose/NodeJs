/**
 *  Async Await
 */


/*usando una promesa*/
/*
let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('JDEPAZ');
    });
};
*/


/* let getNombre = async() => {
    //throw new Error('No existe un nombre para ese usuario');
    return 'JDEPAZ';
};
 */

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JDEPAZ');
        }, 2000);

    });
};

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

//console.log(getNombre());

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    });