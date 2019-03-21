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


let getEmpleado = (id, callback) => {
    let empleadoDb = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadoDb) {
        callback(`No existe el empleado con ID ${id}`);
    } else {
        callback(null, empleadoDb);
    }
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

//let nombreBd = getEmpleado(empleado, function() {});
/*
=> {

    if (err) {
        return console.log(err);
    }
    console.log(resp);
    return {
        id: resp.id,
        nombre: resp.nombre
    };
});
*/


//console.log(` resp = ${nombreBd}`);
/*
if (nombreBd) {
    console.log(nombreBd);
    let salarioDb = salarios.find(salario => salario.id === empleado.id);

    console.log(salarioDb);

    if (!salarioDb) {
        callback(`No se encontró un salario para el usuario ${nombreBd}`);
    } else {
        //console.log(salarioDb.salario);
        callback(null, salarioDb.salario);
    }


} else {
    console.log("err");
    callback(null, nombreBd);
}
*/


/*
let ex = (id) => {
    let aja = () => ({
        getEmpleado(1, (err, empleado) => {
            if (err) {
                return console.log(err);
            }
           
            return empleado;
        });
    });

    console.log({ aja });
};
var func = () => ({ foo: 1 });

console.log(func());

console.log(ex(1));

/*
getSalario(32, (err, resp) => {
    if (err) {
        return console.log(err);
    }
    console.log(resp);

});
*/

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    //console.log(empleado);

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`);

    });
});


/*
getSalario(1, (err, resp) => {
    if (err) {
        return console.log(err);
    }
    console.log(resp);

});
*/