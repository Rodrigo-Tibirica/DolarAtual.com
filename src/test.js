const buscar = require("./backend/buscar");
          
    buscar().then((dolar) => {
        const html = dolar.USD.ask;
        var myJSON = JSON.stringify(dolar);
        //console.log(typeof(myJSON));
        document.getElementById("1").innerHTML = html;
 

    })
w