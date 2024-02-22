import React from "react"   
import TelaInicialBenefícios from "./telaInicialBenefícios/paginaTelaInicialBenefícios"
import PaginaBemVindoBenefícios from "./paginaBemVindoBenefícios/PaginaBemVindoBenefícios"
import PaginaBenefíciosGerais from "./../paginaBenefícios/paginaBenefíciosGerais/PaginaBenefíciosGerais"
import PaginaVerBenefícios from "./paginaVerBenefícios/paginaVerBenefícios"
import Footer from "../ComponentesUniversais/Footer"

function PaginaBenefícios() {
    
    
    return (
        <div>
            <TelaInicialBenefícios/>
            <PaginaBemVindoBenefícios/>
            <PaginaBenefíciosGerais/>
            <PaginaVerBenefícios/>
            <Footer/>
        </div>
    )
}


export default PaginaBenefícios