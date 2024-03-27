import React, { useContext } from "react";
import { CentraldeDadosContext } from "../../ComponentesUniversais/CentralDeDadosContext";
import NomeEmail from "../../ComponentesUniversais/modelosfuncionalidades/NomeEmail";

function PaginaFormularioCartãoBlack() {
    const { estadoFormulário} = useContext(CentraldeDadosContext);
    console.log(estadoFormulário)
    return (
        <div className="w-full h-[1024px] bg-gradient-to-b from-roxoForte to-black">
            <h1 className="text-laranja text-[100px] text-center fonteBold pt-[124px] mb-[124px]">BLACK</h1>
            <NomeEmail />
        </div>
    );
}

export default PaginaFormularioCartãoBlack;
