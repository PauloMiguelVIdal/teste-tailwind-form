import React from "react";
import PaginaInicialCadidatar from "../paginaInicial/paginaInicialCadidatar/PaginaInicialCadidatar";
import PaginaSobreNós from "./PaginaSobreNós/PaginaSobreNós";
import PaginaNossaCultura from "./PaginaNossaCultura/PaginaNossaCultura";
import Footer from "../ComponentesUniversais/Footer";
function PaginaCultura() {
    return (
        <div>
            <PaginaSobreNós></PaginaSobreNós>
            <PaginaNossaCultura></PaginaNossaCultura>
            <PaginaInicialCadidatar></PaginaInicialCadidatar>
            <Footer className="w-full h-[1024px]"></Footer>
        </div>
    )
}

export default PaginaCultura