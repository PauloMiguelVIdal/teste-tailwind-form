import React from "react";
import Cartão1 from "./Cartão1";
import Cartão2 from "./Cartão2";
function Pagina2(props) {
    return (
        <div className="w-full h-[64rem] bg-gradient-radial from-roxoForte to-marinho">
            <div className="h-[41.5rem] w-full bg-transparent">
                <div className="flex justify-center flex-col text-center z-1">
                    <h1 className="text-white/50 text-xl mt-24 pb-4">CARTÕES</h1>
                    <h3 className="text-white text-6xl mt36 pb-12">CARTÕES PARA ATENDER AS SUAS NECESSIDADES</h3>
                    <div className="flex justify-center mt-24">
                        <Cartão1></Cartão1>
                        <Cartão2></Cartão2>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[22.5rem] w-full">
            </div>
        </div>
    )
}

export default Pagina2