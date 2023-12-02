import React from "react";
import obcoin from "./image/OBCOIN svg.svg"

function CartãoBlackLimpo(){
    return(
        <div>
        <div className="origin-center rotate-12 transition-all flex justify-center items-center flex-col w-110 h-[37.5rem] bg-gradient-to-br from-preto from-35% to-roxoForte to-65% rounded-2xl box3 ml-10">
        <div className="flex justify-center items-center flex flex-col rounded-3xl border-laranja w-[22.5rem] h-[35rem] bg-transparent border-2 ">
            <img className="w-[10rem] h-[10rem] m-9" src={obcoin} alt="obcoin"></img>
            {/* <InfoCartão></InfoCartão> */}
            <h1 className="text-laranja text-4xl mt-8 fonteBold">BLACK</h1>
            <img className="rotate-90 mb-[4.31rem] mt-8" src={chip} alt="chip"></img>
        </div>
    </div>
        </div>
    )
}

export default CartãoBlackLimpo