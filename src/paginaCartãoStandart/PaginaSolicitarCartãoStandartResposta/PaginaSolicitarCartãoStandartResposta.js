import React from "react";
import CartõesStandartSeparados from "./CartõesStandartSeparados";

function PaginaSolicitarCartãoStandartResposta() {
    return (
        <div className="w-full h-[1024px] bg-white">
            <h1 className="text-center text-[60px] fonteBold text-roxo pt-[115px]">SOLICITAR CARTÃO</h1>
            <div className="h-[270px] w-full bg-gradient-to-b from-laranja to-roxo relative mt-[550px]">
                <CartõesStandartSeparados></CartõesStandartSeparados>
            </div>

        </div>
    )
}

export default PaginaSolicitarCartãoStandartResposta