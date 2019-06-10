const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtner el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const _lugar = await lugar.getLugarLatLng(direccion);
        console.log(_lugar);
        const _clima = await clima.getClima(_lugar.lat, _lugar.lng);
        return `El clima de ${_lugar.direccion} es de ${_clima}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);