const axios = require("axios");
// const base = "USD";
const buscarVariacao = async (base) => {
    const result = await axios({
        method: "GET",
        url: `https://api.exchangerate.host/latest?base=USD`,
    })
        .then((response) => {
            console.log(Object.keys(response.data.rates))
            // const valor = parseFloat(response.data.USD.ask).toFixed(2);
            // const data = response.data.USD.create_date;
            // this.setState({ valor, data });
        })
        .catch((error) => {
            console.log(error);
        });

    // const variacaoValores = [];
    // const variacaoDatas = [];
    // const arr = result.sort();
    // const date = new Date(2009, 10, 10); // 2009-11-10
    // const month = date.toLocaleString("fr", { month: "short" });
    // console.log(month);

    // arr.forEach(([key, value]) => {
    //     variacaoValores.push(value.BRL.toFixed(2));
    //     variacaoDatas.push(month + key.split("-")[2]);
    // });

    // console.log(arr[0][0]);
};

buscarVariacao();
