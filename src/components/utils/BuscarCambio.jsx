import React from "react";
import axios from "axios";

export default async (base) => {
    console.log(base);
    return axios({
        method: "GET",
        url: `https://economia.awesomeapi.com.br/json/all/${base}-BRL`,
        
    })
        .then((response) => {
            const valor = response.data;
            console.log(valor);
            return valor;
        })
        .catch((error) => {
            console.log(error);
        });
};
