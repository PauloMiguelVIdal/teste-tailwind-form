import React from "react";
import Pagina1 from './Pagina1';
import PaginaInicialCartões from './paginaInicial/paginaInicialCartões/PaginaInicialCartões';
import PaginaInicialApp from './paginaInicial/paginaInicialApp/PaginaInicialApp';
import Pagina4 from './pagina4';
import Pagina5 from './pagina5';
import Pagina6 from './pagina6';
import TelaInicial from "../src/paginaInicial/telaInicial/TelaInicial";
function PaginaInicial() {
    return (
        <div>
            <TelaInicial></TelaInicial>
            <PaginaInicialApp className="w-[1440px] h-[1024px]"></PaginaInicialApp>
            <PaginaInicialCartões className="w-[1440px] h-[1024px]"></PaginaInicialCartões>
            <Pagina4 className="w-[1440px] h-[1024px]"></Pagina4>
            <Pagina5 className="w-[1440px] h-[1024px]"></Pagina5>
            <Pagina6 className="w-[1440px] h-[1024px]"></Pagina6>
            <Pagina1 className="w-[1440px] h-[1024px]"></Pagina1>
        </div>
    )
}

export default PaginaInicial