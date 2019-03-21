let empleados = [{
    id: 1,
    nombre: 'JOSE'
}, {
    id: 2,
    nombre: 'NORA'

}, {
    id: 3,
    nombre: 'MARIA'
}];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = (id) => {

    //retornar promesa
    //tres callbacks
    //el resolve si la promesa es exitosa
    //el reject si no existe un empleado
    return new Promise((resolve, reject) => {

        let empleadoDb = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadoDb) {
            reject(`No existe el empleado con ID ${id}`);
        } else {
            resolve(empleadoDb);
        }

    });
};

let getSalario = (empleado, callback) => {
    let salarioDb = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDb) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {

        // callback(null, salarioDb.salario);
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDb.salario,
            id: empleado.id
        });
    }
};

getEmpleado(1).then(empleado => {
    // console.log(`Empleado de base de datos ${empleado.nombre}`);
    console.log('Empleado de BD: ', empleado);
}, (err) => {
    console.log(err);
})