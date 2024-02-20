import React from "react"   
import TelaInicialBenefícios from "./telaInicialBenefícios/paginaTelaInicialBenefícios"
import PaginaBemVindoBenefícios from "./paginaBemVindoBenefícios/PaginaBemVindoBenefícios"
import PaginaBenefícioGerais from "./paginaBenefíciosGerais/PaginaBenefíciosGerais"

 function PaginaBenefícios() {
    
    
    return (
        <div>
            <TelaInicialBenefícios/>
            <PaginaBemVindoBenefícios/>
            <PaginaBenefícioGerais/>
        </div>
    )
}


export default PaginaBenefícios