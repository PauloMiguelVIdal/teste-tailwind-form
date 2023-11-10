import React from "react";
import CorpoPaginaInicialEsq from "../CorpoPaginaInicialEsq";
import CorpoPaginaInicialDir from "../CorpoPaginaInicialDir";

function CorpoPaginaInicial() {
    return (
        <div className="flex flex-row justify-center w-full min-h-max m-0">
            <CorpoPaginaInicialEsq></CorpoPaginaInicialEsq>
            <CorpoPaginaInicialDir></CorpoPaginaInicialDir>
        </div>
    )
}

export default CorpoPaginaInicial