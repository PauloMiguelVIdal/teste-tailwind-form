import React from "react";
import CartãoBlack from "../ComponentesUniversais/Cartões/CartãoBlack/CartãoBlack";
import CartãoStandart from "../ComponentesUniversais/Cartões/CartãoStandart/CartãoStandart";
export default function PaginaEscolhaSeuCartão() {
    return (
        <div>
            <div className="w-full h-[1024px] bg-white ">
                <h1 className="text-center fonteBold text-roxo text-[40px]">ESCOLHA SEU CARTÃO</h1>
                <div className=" flex justify-around items-center relative top-[300px] z-10">
                    <CartãoBlack />
                    <CartãoStandart />
                </div>
                
    <div className="relative bottom-[115px]">
                <div className="bg-gradient-to-b from-roxo to-roxoForte h-[22.5rem]  w-[49%] relative top-[120px] left-[0.5%] rounded-t-[40px]"></div>
                <div className="bg-gradient-to-b from-laranja to-roxo h-[22.5rem] w-[49%] relative bottom-[240px] left-[50.5%] rounded-t-[40px]"></div>
                </div>
            </div>
        </div>
    )
}