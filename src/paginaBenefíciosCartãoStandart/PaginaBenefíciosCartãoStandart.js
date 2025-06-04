import React from "react";
import TelaInicialCartãoStandart from "../paginaCartãoStandart/telaInicialCartãoStandart/TelaInicialCartãoStandart";
import PaginaAoEscolherBenefíciosCartãoStandart from "./PaginaAoEscolherBenefíciosCartãoStandart/PaginaAoEscolherBenefíciosCartãoStandart"
import PaginaListaBenefíciosCartãoStandart from "./PaginaListaBenefíciosCartãoStandart/PaginaListaBenefíciosCartãoStandart"
import PaginaListaFimBenefíciosCartãoStandart from "./PaginaListaFimBenefíciosCartãoStandart/PaginaListaFimBenefíciosCartãoStandart"
import PaginaBenefíciosExclusivosCartãoStandart from "./PaginaBenefíciosExclusivosCartãoStandart/PaginaBenefíciosExclusivosCartãoStandart"
import Footer from "../ComponentesUniversais/Footer";

function PaginaTodosOsBenefíciosCartãoStandart() {
    return (
        <div>
            <TelaInicialCartãoStandart/>
            <PaginaAoEscolherBenefíciosCartãoStandart/>
            <PaginaListaBenefíciosCartãoStandart/>
            <PaginaListaFimBenefíciosCartãoStandart/>
            <PaginaBenefíciosExclusivosCartãoStandart/>
            <Footer className="w-full h-[1024px]"></Footer>
        </div>
    )
}

export default PaginaTodosOsBenefíciosCartãoStandart


