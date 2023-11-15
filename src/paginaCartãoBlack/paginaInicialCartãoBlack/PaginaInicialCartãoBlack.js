import React from "react";
import Navbar from "../../Navbar";
import SimulaçãoInterativa from "./SimulaçãoInterativa";
import CartãoBlackCurvo from "./CartãoBlackCurvo";
import PedirOSeuCartãoObankBlack from "./PedirOSeuCartãoObankBlack";
function PaginaInicialCartãoBlack() {
    return (
        <div className="w-full h-[1024px] bg-gradient-radial from-roxoForte to-marinho">
            <div className="h-[34rem] w-full bg-transparent">
                <Navbar></Navbar>
                <SimulaçãoInterativa></SimulaçãoInterativa>
                <CartãoBlackCurvo></CartãoBlackCurvo>
            </div>
            <div className="bg-white h-[22.5rem] w-full relative top-[120px]">
                <PedirOSeuCartãoObankBlack></PedirOSeuCartãoObankBlack>
            </div>
        </div>
    )
}
export default PaginaInicialCartãoBlack

