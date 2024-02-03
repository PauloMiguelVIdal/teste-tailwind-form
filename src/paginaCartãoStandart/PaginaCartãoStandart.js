import React from "react";
import TelaInicialCartãoStandart from "../paginaCartãoStandart/telaInicialCartãoStandart/TelaInicialCartãoStandart"
import PaginaBemVindoCartãoStandart from "../paginaCartãoStandart/PaginaBemVindoCartãoStandart/PaginaBemVindoCartãoStandart"
import PaginaBeneficiosCartãoStandart from "../paginaCartãoStandart/PaginaBeneficiosCartãoStandart/PaginaBeneficiosCartãoStandart"
import PaginaSolicitarCartãoStandart from "../paginaCartãoStandart/PaginaSolicitarCartãoStandart/PaginaSolicitarCartãoStandart"
import PaginaSolicitarCartãoStandartResposta from "../paginaCartãoStandart/PaginaSolicitarCartãoStandartResposta/PaginaSolicitarCartãoStandartResposta";
import PaginaSemTaxaCartãoStandart from "../paginaCartãoStandart/PaginaSemTaxaCartãoStandart/PaginaSemTaxaCartãoStandart"
import PaginaFAQs from "./PaginaFAQs/PaginaFAQs"
import PaginaFAQsResposta from "./PaginaFAQsResposta/PaginaFAQsResposta"
import PaginaDepoimentosCartãoStandart from "./PaginaDepoimentosCartãoStandart/PaginaDepoimentosCartãoStandart"
import PaginaSuporteStandart from "./PaginaSuporteStandart/PaginaSuporteStandart"
import PaginaFormularioCartãoStandart from "./PaginaFormularioCartãoStandart/PaginaFormularioCartãoStandart";
import PaginaFormularioCartãoStandartResposta from "./PaginaFormularioStandartResposta/PaginaFormularioCartãoStandartResposta";
import Footer from "../ComponentesUniversais/Footer";

function PaginaCartãoStandart(){
    return(
        <div>
        <TelaInicialCartãoStandart></TelaInicialCartãoStandart>
        <PaginaBemVindoCartãoStandart ></PaginaBemVindoCartãoStandart>
        <PaginaBeneficiosCartãoStandart></PaginaBeneficiosCartãoStandart>
        <PaginaSolicitarCartãoStandart></PaginaSolicitarCartãoStandart>
        <PaginaFormularioCartãoStandart></PaginaFormularioCartãoStandart>
        <PaginaSolicitarCartãoStandartResposta></PaginaSolicitarCartãoStandartResposta>
        <PaginaFormularioCartãoStandartResposta></PaginaFormularioCartãoStandartResposta>
        <PaginaSemTaxaCartãoStandart></PaginaSemTaxaCartãoStandart>
        <PaginaFAQs></PaginaFAQs>
        <PaginaFAQsResposta></PaginaFAQsResposta>
        <PaginaDepoimentosCartãoStandart></PaginaDepoimentosCartãoStandart>
        <PaginaSuporteStandart></PaginaSuporteStandart>
        <Footer className="w-full h-[1024px]"></Footer>
        </div>
    )
}

export default PaginaCartãoStandart