import React from "react";
import CartõesUnidos from "./CartõesUnidos";
import NomeCompleto from "./NomeCompleto";

function PaginaSolicitarCartãoBlack(){
    return(
        <div className="w-full h-[1024px]">
            
            <h1 className="text-center text-[60px] fonteBold text-roxo">SOLICITAR CARTÃO</h1>
            <CartõesUnidos></CartõesUnidos>
            <NomeCompleto></NomeCompleto> 
            <h4 className="text-[40px] text-laranja fonteBold relative left-[1023px] bottom-[730px]">Acompanhar solicitação</h4>
        </div>
    )
}
export default PaginaSolicitarCartãoBlack