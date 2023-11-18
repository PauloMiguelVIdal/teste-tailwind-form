import React from "react";
import CartõesUnidos from "./CartõesUnidos";
import NomeCompleto from "./NomeCompleto";

function PaginaSolicitarCartãoBlack() {
    return (
        <div className="w-full h-[1024px] bg-gradient-to-b from-roxo to-black">
            <h1 className="text-center text-[60px] fonteBold text-laranja pt-[115px]">SOLICITAR CARTÃO</h1>
            <CartõesUnidos></CartõesUnidos>
            <NomeCompleto></NomeCompleto>
            <button className="linkTexto z-40 relative left-[1023px] bottom-[730px]">
                <a href="teste" className="">
                    <h4 className="text-[40px] text-laranja fonteBold ">Acompanhar solicitação</h4>
                </a>
            </button>
        </div>
    )
}
export default PaginaSolicitarCartãoBlack