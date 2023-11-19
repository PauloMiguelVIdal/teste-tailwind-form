import React from "react";
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './pagina3';
import Pagina4 from './pagina4';
import Pagina5 from './pagina5';
import Pagina6 from './pagina6';
import TelaInicial from "./TelaInicial";
function PaginaInicial() {
    return (
        <div>
            <TelaInicial></TelaInicial>
            <Pagina3 className="w-[1440px] h-[1024px]"></Pagina3>
            <Pagina2 className="w-[1440px] h-[1024px]"></Pagina2>
            <Pagina4 className="w-[1440px] h-[1024px]"></Pagina4>
            <Pagina5 className="w-[1440px] h-[1024px]"></Pagina5>
            <Pagina6 className="w-[1440px] h-[1024px]"></Pagina6>
            <Pagina1 className="w-[1440px] h-[1024px]"></Pagina1>
        </div>
    )
}

export default PaginaInicial