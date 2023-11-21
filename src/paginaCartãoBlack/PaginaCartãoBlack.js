import React from "react";
import PaginaInicialCartãoBlack from "./telaInicialCartãoBlack/PaginaInicialCartãoBlack"
import PaginaBemVindoBlack from "./PaginaBemVindoBlack"
import PaginaBeneficiosBlack from "./PaginaBeneficiosBlack"
import PaginaRequisitosBlack from "./PaginaRequisitosBlack"
import PaginaSolicitarCartãoBlack from "./PaginaSolicitarCartãoBlack"
import PaginaSolicitarCartãoBlackResposta from "./PaginaSolicitarCartãoBlackResposta";
import PaginaSemTaxaCartãoBlack from "./PaginaSemTaxaCartãoBlack"
import PaginaFAQsBlack from "./PaginaFAQsBlack"
import PaginaFAQsBlackResposta from "./PaginaFAQsBlackResposta"
import PaginaDepoimentosBlack from "./PaginaDepoimentosBlack"
import PaginaSuporteBlack from "./PaginaSuporteBlack"
import FormularioBlack from "./FormularioBlack";
import FormularioBlackResposta from "./FormularioBlackResposta";

function PaginaCartãoBlack(){
    return(
        <div>
        <PaginaInicialCartãoBlack></PaginaInicialCartãoBlack>
        <PaginaBemVindoBlack ></PaginaBemVindoBlack>
        <PaginaBeneficiosBlack></PaginaBeneficiosBlack>
        <PaginaRequisitosBlack></PaginaRequisitosBlack>
        <PaginaSolicitarCartãoBlack></PaginaSolicitarCartãoBlack>
        <FormularioBlack></FormularioBlack>
        <PaginaSolicitarCartãoBlackResposta></PaginaSolicitarCartãoBlackResposta>
        <FormularioBlackResposta></FormularioBlackResposta>
        <PaginaSemTaxaCartãoBlack></PaginaSemTaxaCartãoBlack>
        <PaginaFAQsBlack></PaginaFAQsBlack>
        <PaginaFAQsBlackResposta></PaginaFAQsBlackResposta>
        <PaginaDepoimentosBlack></PaginaDepoimentosBlack>
        <PaginaSuporteBlack></PaginaSuporteBlack>
       
        </div>
    )
}

export default PaginaCartãoBlack