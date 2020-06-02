const axios = require("axios");

const URL = require("./URLS");


const myUrl = `${URL.dolarURL}`;

const buscarDolar = function () {
    return axios({
        method: "GET",
        url: myUrl,
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
        });
};


module.exports = async function exportarDolar() {

    return await buscarDolar();
};
