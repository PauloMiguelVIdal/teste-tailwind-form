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

function PaginaCartãoBlack(){
    return(
        <div>
        <TelaInicialCartãoBlack></TelaInicialCartãoBlack>
        <PaginaBemVindoCartãoBlack ></PaginaBemVindoCartãoBlack>
        <PaginaBeneficiosCartãoBlack></PaginaBeneficiosCartãoBlack>
        <PaginaRequisitosCartãoBlack></PaginaRequisitosCartãoBlack>
        <PaginaSolicitarCartãoBlack></PaginaSolicitarCartãoBlack>
        <PaginaFormularioCartãoBlack></PaginaFormularioCartãoBlack>
        <PaginaSolicitarCartãoBlackResposta></PaginaSolicitarCartãoBlackResposta>
        <PaginaFormularioBlackResposta></PaginaFormularioBlackResposta>
        <PaginaSemTaxaCartãoBlack></PaginaSemTaxaCartãoBlack>
        <PaginaFAQs></PaginaFAQs>
        <PaginaFAQsResposta></PaginaFAQsResposta>
        <PaginaDepoimentosCartãoBlack></PaginaDepoimentosCartãoBlack>
        <PaginaSuporteBlack></PaginaSuporteBlack>
       
        </div>
    )
}

export default PaginaCartãoBlack