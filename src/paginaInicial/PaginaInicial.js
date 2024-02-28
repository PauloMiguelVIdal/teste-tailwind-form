import React from "react";
import PaginaInicialCartões from './paginaInicialCartões/PaginaInicialCartões';
import PaginaInicialApp from './paginaInicialApp/PaginaInicialApp';
import PaginaInicialBenefícios from './paginaInicialBenefícios/PaginaInicialBenefícios';
import PaginaInicialCriptomoeda from './paginaInicialCriptomoeda/PaginaInicialCriptomoeda';
import PaginaInicialParceiras from './paginaInicialParcerias/PaginaInicialParceiras';
import TelaInicial from "./telaInicial/TelaInicial";
import PaginaInicialCadidatar from './paginaInicialCadidatar/PaginaInicialCadidatar';
import Footer from "../ComponentesUniversais/Footer";
import {Route, BrowserRouter as Router} from "react-router-dom"

function PaginaInicial() {
    return (
        <div>
            <TelaInicial></TelaInicial>
            <PaginaInicialApp className="w-full h-[1024px]"></PaginaInicialApp>
            <PaginaInicialCartões className="w-full h-[1024px]"></PaginaInicialCartões>
            <PaginaInicialBenefícios className="w-full h-[1024px]"></PaginaInicialBenefícios>
            <PaginaInicialCriptomoeda className="w-full h-[1024px]"></PaginaInicialCriptomoeda>
            <PaginaInicialParceiras className="w-full h-[1024px]"></PaginaInicialParceiras>
            <PaginaInicialCadidatar className="w-full h-[1024px]"></PaginaInicialCadidatar>
            <Footer className="w-full h-[1024px]"></Footer>
        </div>
    )
}

export default PaginaInicial