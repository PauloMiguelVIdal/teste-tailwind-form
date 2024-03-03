import React from "react";
import TelaInicialCartãoBlack from "../paginaCartãoBlack/telaInicialCartãoBlack/TelaInicialCartãoBlack";
import PaginaAoEscolherBenefíciosCartãoBlack from "./PaginaAoEscolherBenefíciosCartãoBlack/PaginaAoEscolherBenefíciosCartãoBlack"
import PaginaListaBenefíciosCartãoBlack from "./PaginaListaBenefíciosCartãoBlack/PaginaListaBenefíciosCartãoBlack"
import PaginaListaFimBenefíciosCartãoBlack from "./PaginaListaFimBenefíciosCartãoBlack/PaginaListaFimBenefíciosCartãoBlack"
import PaginaBenefíciosEspeciaisCartãoBlack from "./PaginaBenefíciosEspeciaisCartãoBlack/PaginaBenefíciosEspeciaisCartãoBlack"
import PaginaBenefíciosExclusivosCartãoBlack from "./PaginaBenefíciosExclusivosCartãoBlack/PaginaBenefíciosExclusivosCartãoBlack"
import Footer from "../ComponentesUniversais/Footer";

function PaginaTodosOsBenefíciosCartãoBlack() {
    return (
        <div>
            <TelaInicialCartãoBlack></TelaInicialCartãoBlack>
            <PaginaAoEscolherBenefíciosCartãoBlack></PaginaAoEscolherBenefíciosCartãoBlack>
            <PaginaListaBenefíciosCartãoBlack></PaginaListaBenefíciosCartãoBlack>
            <PaginaListaFimBenefíciosCartãoBlack></PaginaListaFimBenefíciosCartãoBlack>
            <PaginaBenefíciosEspeciaisCartãoBlack></PaginaBenefíciosEspeciaisCartãoBlack>
            <PaginaBenefíciosExclusivosCartãoBlack></PaginaBenefíciosExclusivosCartãoBlack>
            <Footer className="w-full h-[1024px]"></Footer>
        </div>
    )
}

export default PaginaTodosOsBenefíciosCartãoBlack


