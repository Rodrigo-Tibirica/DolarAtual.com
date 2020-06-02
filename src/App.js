import React from 'react';
import './App.css';
import './backend/buscar';
import './teste2';

const funcao = require("./backend/buscar");
const funcao2 = `${funcao}`;

function App() {
  return (
    <div className="App"> 

        
      <div className = "Fonte"id = "1" >
     
        <h1 class = "dolar" > funcao2.USD.ask </h1>


       </div>

    </div>
  );
}

export default App;
