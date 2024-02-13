import React from "react";
import Navbar from "../../../src/ComponentesUniversais/Navbar"
import CartõesCurvosSeparados from "../../ComponentesUniversais/Cartões/variaçõesCartões/CartõesCruvosSeparados";
export default function PaginaBemVindoCartões(){
    return(
        <div>
        <div className="w-full h-[1024px] bg-gradient-radial from-laranja from-10% via-roxo via-40% to-black to-90% ">
            <div className="h-[34rem] w-full bg-transparent">
                <Navbar></Navbar>
                <CartõesCurvosSeparados/>
            </div>
            <div className="bg-white h-[22.5rem] w-full relative top-[120px]">
            {/* <button className="ml-[970px] top-[100px] relative z-40 linkTexto">
                <a href="teste" className="">
                    <h4 className="text-[40px]  fonteBold text-laranja">Pedir o seu cartão OBank STANDART</h4>
                </a>
            </button> */}
            </div>
        </div>
        </div>
    )
}