import React, {useContext} from "react";
import CartõesBlackSeparados from "./CartõesBlackSeparados";
import { CentraldeDadosContext } from "../../ComponentesUniversais/CentralDeDadosContext";
function PaginaSolicitarCartãoBlackResposta() {
    const { estadoFormulário} = useContext(CentraldeDadosContext);
    console.log(estadoFormulário)
    if(estadoFormulário == false){
    return (
        <div className="w-full h-[1024px] bg-white">
            <h1 className="text-center text-[60px] fonteBold text-roxo pt-[115px]">SOLICITAR CARTÃO</h1>
            <div className="h-[270px] w-full bg-gradient-to-b from-roxo to-roxoForte relative mt-[550px]">
                <CartõesBlackSeparados></CartõesBlackSeparados>
            </div>

        </div>
    )
}
}
export default PaginaSolicitarCartãoBlackResposta