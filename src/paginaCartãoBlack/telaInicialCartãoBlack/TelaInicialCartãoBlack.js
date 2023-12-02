import React from "react";
import Navbar from "../../ComponentesUniversais/Navbar";
import CartãoBlackCurvo from "./CartãoBlackCurvo";
function TelaInicialCartãoBlack() {
    return (
        <div className="w-full h-[1024px] bg-gradient-radial from-roxoForte to-marinho">
            <div className="h-[34rem] w-full bg-transparent">
                <Navbar></Navbar>
                <CartãoBlackCurvo></CartãoBlackCurvo>
            </div>
            <div className="bg-white h-[22.5rem] w-full relative top-[120px]">
            <button className="ml-[970px] top-[100px] relative z-40 linkTexto">
                <a href="teste" className="">
                    <h4 className="text-[40px]  fonteBold text-laranja">Pedir o seu cartão OBank BLACK</h4>
                </a>
            </button>
            </div>
        </div>
    )
}
export default TelaInicialCartãoBlack

