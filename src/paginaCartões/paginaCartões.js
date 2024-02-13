import React from "react";
import PaginaBemVindoCartões from "./PaginaBemVindoCartões.js/PaginaBemVindoCartões";
import PaginaEscolhaSeuCartão from "./PaginaEscolhaSeuCartão";
import PaginaPlanosCartões from "./PaginaPlanosCartões";
import Footer from "../ComponentesUniversais/Footer";



 function PaginaCartões(){

    return(
        <div>
            <PaginaBemVindoCartões />
            <PaginaEscolhaSeuCartão />
            <PaginaPlanosCartões />
            <Footer/>
        </div>
    )
} 

export default PaginaCartões