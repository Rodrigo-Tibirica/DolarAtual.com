import React from 'react';
import "../../styles/css/Footer.css";
//export default props =>{

//return(<footer className="footer">Footer</footer>)


//}
export default (props) => {
    return (
        <footer className="footer">
           
                <ul>
                    <li>
                        <u>
                            <a href="https://github.com/Rodrigo-Tibirica/DolarAtual.com">Innervisions Lab Team.</a>
                        </u>
                        <a> Project developed by </a>
                        <u> <a href="https://github.com/eduardo-diniz">Eduardo Gomes</a> 
                        </u>
                        <a>, </a>
                        <u>
                            <a href="https://github.com/fabio-barros">Fábio Barros </a>
                        </u>
                        <a>and </a>
                        <u>
                            <a href="https://github.com/Rodrigo-Tibirica">Rodrigo Tibiriçá</a>
                        </u>
                        <br />
                        
                        <a>2020 ©️ All right Reversed. Innervisions Lab </a>
                    </li>
                </ul>
            
        </footer>
    );
};

