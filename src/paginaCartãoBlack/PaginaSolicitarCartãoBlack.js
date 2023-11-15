import React from "react";
import CartõesUnidos from "./CartõesUnidos";
import NomeCompleto from "./NomeCompleto";

function PaginaSolicitarCartãoBlack(){
    return(
        <div className="w-full h-[1024px]">
            <h1 className="text-center text-[60px] fonteBold">SOLICITAR CARTÃO</h1>
            <CartõesUnidos></CartõesUnidos>
            <NomeCompleto></NomeCompleto> 
            <h4>AcompanharSolicitação</h4>
        </div>
    )
}
export default PaginaSolicitarCartãoBlack