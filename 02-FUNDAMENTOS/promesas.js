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

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDb = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDb) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.salario,
                id: empleado.id
            });
        }
    });
};

/*
getEmpleado(3).then(empleado => {
    // console.log(`Empleado de base de datos ${empleado.nombre}`);
    //console.log('Empleado de BD: ', empleado);
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});
*/

/// Encadenar PROMESAS
getEmpleado(1).then(empleado => {
        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });