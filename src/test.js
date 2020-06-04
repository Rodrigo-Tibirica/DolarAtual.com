//const buscar = require("./backend/buscar");
          
    buscar().then((dolar) => {
       const html = dolar.USD.ask;
        document.getElementById("1").innerHTML = html;
 

   // })
