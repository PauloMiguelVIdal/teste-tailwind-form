import React from "react";
import PaginaBemVindoCartões from "./PaginaBemVindoCartões.js/PaginaBemVindoCartões";
import PaginaEscolhaSeuCartão from "./PaginaEscolhaSeuCartão";
import PaginaPlanosCartões from "./PaginaPlanosCartões";
import Footer from "../ComponentesUniversais/Footer";

const scrollParaFormulárioBlack = () => {
    const formulario = document.getElementById("formularioCartaoBlack");
    if (formulario) {
        window.scrollTo({
            behavior: 'smooth',
            top: formulario.offsetTop
        });
    }
};


 function PaginaCartões(){

    return(
        <div>
            
            <PaginaBemVindoCartões />{/*pagina na qual está a navbar e os componentes inicias  */}
            <PaginaEscolhaSeuCartão />
            <PaginaPlanosCartões  scrollParaFormulário={scrollParaFormulárioBlack} />
            <Footer/>
        </div>
    )
} 

export default PaginaCartões