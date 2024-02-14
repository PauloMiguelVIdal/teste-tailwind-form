import React from "react";
import TelaInicialCartãoBlack from "../paginaCartãoBlack/telaInicialCartãoBlack/TelaInicialCartãoBlack"
import PaginaBemVindoCartãoBlack from "./PaginaBemVindoCartãoBlack/PaginaBemVindoCartãoBlack"
import PaginaBeneficiosCartãoBlack from "./PaginaBeneficiosCartãoBlack/PaginaBeneficiosCartãoBlack"
import PaginaRequisitosCartãoBlack from "./PaginaRequisitosCartãoBlack/PaginaRequisitosCartãoBlack"
import PaginaSolicitarCartãoBlack from "./PaginaSolicitarCartãoBlack/PaginaSolicitarCartãoBlack"
import PaginaSolicitarCartãoBlackResposta from "./PaginaSolicitarCartãoBlackResposta/PaginaSolicitarCartãoBlackResposta";
import PaginaSemTaxaCartãoBlack from "./PaginaSemTaxaCartãoBlack/PaginaSemTaxaCartãoBlack"
import PaginaFAQs from "./PaginaFAQs/PaginaFAQs"
import PaginaFAQsResposta from "./PaginaFAQsResposta/PaginaFAQsResposta"
import PaginaDepoimentosCartãoBlack from "./PaginaDepoimentosCartãoBlack/PaginaDepoimentosCartãoBlack"
import PaginaSuporteBlack from "./PaginaSuporteBlack/PaginaSuporteBlack"
import PaginaFormularioCartãoBlack from "./PaginaFormularioCartãoBlack/PaginaFormularioCartãoBlack";
import PaginaFormularioBlackResposta from "./PaginaFormularioBlackResposta/PaginaFormularioBlackResposta";
import Footer from "../ComponentesUniversais/Footer";
function PaginaCartãoBlack(){
    const scrollParaFormulárioBlack = () => {
        const formulario = document.getElementById("formularioCartaoBlack");
        if (formulario) {
            window.scrollTo({
                behavior: 'smooth',
                top: formulario.offsetTop
            });
        }
    };



    return(
        <div>
       <TelaInicialCartãoBlack scrollParaFormulário={scrollParaFormulárioBlack} />
        <PaginaBemVindoCartãoBlack/>
        <PaginaBeneficiosCartãoBlack/>
        <PaginaRequisitosCartãoBlack/>        
        <PaginaSolicitarCartãoBlack/>
    <div id="formularioCartaoBlack">
        < PaginaFormularioCartãoBlack/>
    </div>
 
        <PaginaSolicitarCartãoBlackResposta/>
        <PaginaFormularioBlackResposta/>
        <PaginaSemTaxaCartãoBlack/>
        <PaginaFAQs/>
        <PaginaFAQsResposta/>
        <PaginaDepoimentosCartãoBlack/>
        <PaginaSuporteBlack/>
        <Footer className="w-full h-[1024px]"/>
        </div>
    )
}

export default PaginaCartãoBlack