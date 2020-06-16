import React from "react";
import axios from "axios";

export default async (base) => {
    console.log(base);
    return axios({
        method: "GET",
        url: `https://api.exchangerate.host/latest?base=${base}&symbols=BRL`,
    })
        .then((response) => {
            const valor = response.data.rates.BRL;
            console.log(valor);
            return parseFloat(valor).toFixed(2);
        })
        .catch((error) => {
            console.log(error);
        });
};
