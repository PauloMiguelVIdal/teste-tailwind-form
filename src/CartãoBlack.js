import React from "react";
import InfoCartão from "./InfoCartão";
import chip from "./image/chip-de-cartao-de-credito (1).png"
import obcoin from "./image/OBCOIN svg.svg"
function CartãoBlack(){
    return(
        <div className="origin-center flex justify-center items-center flex-col w-110 h-[37.5rem] bg-gradient-to-br from-black from-35% to-roxoForte to-65% rounded-[40px] ml-10">
        <div className="flex justify-center items-center flex flex-col rounded-3xl border-laranja w-[22.5rem] h-[35rem] bg-transparent border-2 ">
            <img className="w-[10rem] h-[10rem] m-9" src={obcoin} alt="obcoin"></img>
            <InfoCartão></InfoCartão>
            <h1 className="text-laranja text-4xl mt-8 fonteBold">BLACK</h1>
            <img className="rotate-90 mb-[4.31rem] mt-8" src={chip} alt="chip"></img>
        </div>
    </div>
    )
}

export default CartãoBlack