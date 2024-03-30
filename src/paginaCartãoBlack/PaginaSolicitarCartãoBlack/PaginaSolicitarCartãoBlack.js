import React, {useContext} from "react";
import CartõesBlackUnidos from "./CartõesBlackUnidos";
import { CentraldeDadosContext } from "../../ComponentesUniversais/CentralDeDadosContext";

function PaginaSolicitarCartãoBlack() {
    const { estadoFormulário} = useContext(CentraldeDadosContext);
    console.log(estadoFormulário)
    if(estadoFormulário == true){
    return (
        <div className="w-full h-[1024px] bg-white">
            <h1 className="text-center text-[60px] fonteBold text-roxo pt-[115px]">SOLICITAR CARTÃO</h1>
            <div className="h-[270px] w-full bg-gradient-to-b from-roxo to-roxoForte relative mt-[550px]">
            <CartõesBlackUnidos rotate={50}/>
            </div>
                
        </div>
    )
}}
export default PaginaSolicitarCartãoBlack