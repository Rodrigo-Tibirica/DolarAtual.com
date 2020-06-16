import React from "react";
import "../../styles/css/Footer.css";
//export default props =>{

//return(<footer className="footer">Footer</footer>)

//}
export default (props) => {
    return (
        <footer className="footer">
            <ul>
                <li>
                    <a href=""> Termos | Privacidade</a>
                </li>
                <li>
                    <a
                        className="copyright"
                        href="http://innervisionslab.github.io/"
                    >
                        &copy;{` 2020, Innervisions Lab.`}
                    </a>
                </li>

                {/* <li>
                    <a> Projeto em desenvolvimento por </a>
                    <a href="https://github.com/eduardo-diniz">
                        {`Eduardo Gomes`}
                    </a>
                    <a>, </a>
                    <a href="https://github.com/fabio-barros">
                        {`Fábio Barros`}
                    </a>
                    <a> e </a>
                    <a
                        className="nome"
                        href="https://github.com/Rodrigo-Tibirica"
                    >
                        {`Rodrigo Tibiriçá`}
                    </a>
                </li> */}
            </ul>
        </footer>
    );
};
