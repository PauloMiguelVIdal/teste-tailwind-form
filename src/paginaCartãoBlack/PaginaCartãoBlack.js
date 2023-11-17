import React from "react";
import PaginaInicialCartãoBlack from "./paginaInicialCartãoBlack/PaginaInicialCartãoBlack"
import PaginaBemVindoBlack from "./PaginaBemVindoBlack"
import PaginaBeneficiosBlack from "./PaginaBeneficiosBlack"
import PaginaRequisitosBlack from "./PaginaRequisitosBlack"
import PaginaSolicitarCartãoBlack from "./PaginaSolicitarCartãoBlack"
import PaginaSemTaxaCartãoBlack from "./PaginaSemTaxaCartãoBlack"
import PaginaFAQsBlack from "./PaginaFAQsBlack"
import PaginaDepoimentosBlack from "./PaginaDepoimentosBlack"
import PaginaSuporteBlack from "./PaginaSuporteBlack"

function PaginaCartãoBlack(){
    return(
        <div>
        <PaginaInicialCartãoBlack></PaginaInicialCartãoBlack>
        <PaginaBemVindoBlack ></PaginaBemVindoBlack>
        <PaginaBeneficiosBlack></PaginaBeneficiosBlack>
        <PaginaRequisitosBlack></PaginaRequisitosBlack>
        {/* <PaginaSolicitarCartãoBlack></PaginaSolicitarCartãoBlack> */}
        {/* <PaginaSemTaxaCartãoBlack></PaginaSemTaxaCartãoBlack> */}
        {/* <PaginaFAQsBlack></PaginaFAQsBlack> */}
        {/* <PaginaDepoimentosBlack></PaginaDepoimentosBlack> */}
        {/* <PaginaSuporteBlack></PaginaSuporteBlack> */}
        </div>
    )
}

export default PaginaCartãoBlack