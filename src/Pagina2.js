import React from "react";
import CartãoStandart from "./CartãoStandart";
import CartãoBlack from "./CartãoBlack";
function Pagina2(props) {
    return (
        <div className="w-full h-[64rem] bg-gradient-radial from-roxoForte to-marinho">
            <div className="h-[41.5rem] w-full bg-transparent">
                <div className="flex justify-center flex-col text-center z-1">
                    {/* <h1 className="text-white/50 text-xl mt-24 pb-4">CARTÕES</h1> */}
                    <h3 className="text-white text-6xl mt-24 pb-12 fonteBold">CARTÕES PARA ATENDER AS SUAS NECESSIDADES</h3>
                    <div className="flex place-content-evenly mt-[70px]">
                        <CartãoStandart className="hover:origin-center hover:rotate-12 transition-all box3"></CartãoStandart>
                        <CartãoBlack className="hover:origin-center hover:rotate-12 transition-all box3"></CartãoBlack>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[22.5rem] w-full">
                <h4 className="pt-[280px] pl-[100px] text-[40px] fonteBold text-laranja">saiba mais sobre cartões</h4>
            </div>
        </div>
    )
}

export default Pagina2