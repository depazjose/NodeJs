function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 20));

//flecha

let sumarF = (a, b) => {
    return a + b;
}
console.log(sumarF(10, 20));

let sumarFF = (a, b) => a + b;

console.log(sumarFF(10, 20));

//función flecha

let flecha = () => 'Hola mundo';

console.log(flecha());

let saludar = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar('Joses'));

/*
let deadpool = {
    nombre: 'Wade',
    ape: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${this.nombre} ${this.ape} -- poder: ${this.poder}`
    }
};
*/
let deadpool = {
    nombre: 'Wade',
    ape: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.ape} -- poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());