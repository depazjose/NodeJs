let nombre = 'Deadpool';
let real = "Winton Lobo";

console.log(nombre + ' ' + real);

console.log(`${nombre } ${real}`);

let nombreC = nombre + ' ' + real;
let nombreT = `${nombre } ${real}`;

console.log(nombreC === nombreT);

function getNombre() {
    return `${nombre } ${real}`;
}

console.log(`El nombre de: ${getNombre()}`);