import React from "react";
import Navbar from "../../ComponentesUniversais/Navbar";
import CartãoStandartCurvo from "./CartãoStandartCurvo";
import { Link } from "react-router-dom";
function TelaInicialCartãoStandart() {
    return (
        <div className="w-full h-[1024px] bg-gradient-radial from-laranja via-roxo to-roxoForte">
            <div className="h-[34rem] w-full bg-transparent">
                <Navbar></Navbar>
                <CartãoStandartCurvo></CartãoStandartCurvo>
            </div>
            <div className="bg-white h-[22.5rem] w-full relative top-[120px]">
                <Link to="/cartãoStandart/solicitar" >
                    <button className="ml-[970px] top-[100px] relative z-40 linkTexto">
                        <h4 className="text-[40px]  fonteBold text-laranja">Pedir o seu cartão OBank STANDART</h4>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default TelaInicialCartãoStandart

