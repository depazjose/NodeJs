const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=44d81e51a7286be4c2868bc2736107e0&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}