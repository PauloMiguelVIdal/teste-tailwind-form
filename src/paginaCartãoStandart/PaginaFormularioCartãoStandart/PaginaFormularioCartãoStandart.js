import React from "react"
import NomeEmail from "../../ComponentesUniversais/modelosfuncionalidades/NomeEmail"



function PaginaFormularioCartãoStandart() {
    return (
        <div className="w-full h-[1024px] bg-gradient-to-b from-roxo to-roxoForte">
            <h1 className="text-laranja text-[100px] text-center fonteBold pt-[124px] mb-[124px]">STANDART</h1>
            <NomeEmail></NomeEmail>
        </div>
    )
}

export default PaginaFormularioCartãoStandart