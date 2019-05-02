const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const baseUrl = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`;
    const headerName = 'X-RapidAPI-Key';
    const headerApiKey = 'bd7b613555msh1a1e9f7c59c7d0ap1087a1jsnd90e62725589';


    const instance = axios.create({
        baseURL: baseUrl,
        headers: { 'X-RapidAPI-Key': headerApiKey }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No nay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /* instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]);
        })
        .catch(err => {
            console.log('Error ', err);
        }); */

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}