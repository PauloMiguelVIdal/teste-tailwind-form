import React from "react";
import Navbar from "./Navbar";
import CorpoPaginaInicial from "./CorpoPaginaInicial";
function PaginaInicial(){
    return(
        <div className="bg-roxo w-full h-[1024px]">
            <Navbar></Navbar>
            <CorpoPaginaInicial></CorpoPaginaInicial>
        </div>
    )
}

export default PaginaInicial