let deadpool = {
    nombre: 'Wade',
    ape: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.ape} -- poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());

//let nombre = deadpool.nombre;
//let ape = deadpool.ape;
//let poder = deadpool.poder;
//console.log(nombre + " " + ape + " " + poder);

let { nombre, ape, poder } = deadpool;
console.log(nombre, ape, poder);