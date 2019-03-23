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
        resolve('JDEPAZ');
    });
};

//console.log(getNombre());

getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    });