import React from "react"
import Navbar from "../../ComponentesUniversais/Navbar"
import CorpoPaginaInicial from "./CorpoPaginaInicial"


function TelaInicial(){
    return(
<div className="bg-roxo w-full h-[1024px]">
<Navbar></Navbar>
<CorpoPaginaInicial></CorpoPaginaInicial>
</div>
)
}

export default TelaInicial