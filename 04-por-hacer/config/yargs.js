const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de la tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crea un elmento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra un elmento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}