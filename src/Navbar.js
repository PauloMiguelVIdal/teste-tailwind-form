import React from "react";
import obcoin from "./image/OBCOIN svg.svg"
function Navbar(){
    return(
    <div className="bg-white w-full h-32 flex flex-row items-center place-content-between">
        <img width={100} height={100} className="flex items-center ml-4" src={obcoin} alt="obcoin"></img>
        <ul className="flex text-laranja text-3xl w-[1200] place-content-evenly fonteBold">
            <li className="pr-12">App</li>
            <li className="pr-12">Cartões</li>
            <li className="pr-12">Benefícios</li>
            <li className="pr-12">Moeda</li>
            <li className="pr-12">Cultura</li>
            <li className="pr-12">Candidatura</li>
        </ul>
    </div>
)
}

export default Navbar