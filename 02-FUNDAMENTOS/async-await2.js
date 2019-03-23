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


/* 
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
 */


let getEmpleado = async(id) => {

    let empleadoDb = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadoDb) {
        throw new Error(`No existe el empleado con ID ${id}`);
    } else {
        return empleadoDb;
    }
};

/* let getSalario = (empleado) => {
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
}; */


let getSalario = async(empleado) => {

    let salarioDb = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDb) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDb.salario,
            id: empleado.id
        });
    }
};


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de $${resp.salario}`;
};

getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));