import React from "react";
import obcoin from "../Logo/OBCOIN svg.svg"
import { Link } from "react-router-dom";
function Navbar() {






    return (
        <div className="bg-roxo w-full h-32 flex flex-row items-center place-content-between">
           <a href="/"> <img width={100} height={100} className="flex items-center ml-4" src={obcoin} alt="obcoin"></img></a>
            <ul className="flex text-laranja text-3xl w-[1200] place-content-evenly fonteBold">
                {/* <li className="navbarHover">
                    App
                </li> */}
                <a href="/cartões">
                <li className="navbarHover">
                    Cartões
                </li>
                </a>
                {/* <ul>
                <li>Cartão Standart</li>
                <li>Cartão Black</li>
            </ul> */}
            <a href="/benefícios">
                <li className="navbarHover">
                    Benefícios
                </li>
                </a>
                <a href="criptomoeda">

                    <li className="navbarHover">
                        Criptomoeda
                    </li>
                </a>
                <a href="cultura">
                <li className="navbarHover">
                    Cultura
                </li>
                </a>
                {/* <li className="navbarHover">
                    Candidatura
                </li> */}
            </ul>
        </div>
    )
}

export default Navbar