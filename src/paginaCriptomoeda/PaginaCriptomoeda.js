import React from "react";
import TelaInicialCriptomoeda from "./TelaInicialCriptomoeda/TelaInicialCriptomoeda"
import PaginaBemVindoCriptomoeda from "./PaginaBemVindoCriptomoeda/PaginaBemVindoCriptomoeda"
import PaginaBenefíciosCriptomoeda from "./PaginaBenefíciosCriptomoeda/PaginaBenefíciosCriptomoeda"
import PaginaInvistaAgora from "./PaginaInvistaAgora/PaginaInvistaAgora"
import Footer from "../ComponentesUniversais/Footer";

function PaginaCriptomoeda() {
    return (
        <div>
            <TelaInicialCriptomoeda></TelaInicialCriptomoeda>
            <PaginaBemVindoCriptomoeda></PaginaBemVindoCriptomoeda>
            <PaginaBenefíciosCriptomoeda></PaginaBenefíciosCriptomoeda>
            <PaginaInvistaAgora></PaginaInvistaAgora>
            <Footer className="w-full h-[1024px]"></Footer>
        </div>
    )
}

export default PaginaCriptomoeda