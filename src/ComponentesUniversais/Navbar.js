import React from "react";
import obcoin from "../Logo/OBCOIN svg.svg"
import { Link } from "react-router-dom";
function Navbar() {






    return (
        <div className="bg-roxo w-full h-32 flex flex-row items-center place-content-between">
            <img width={100} height={100} className="flex items-center ml-4" src={obcoin} alt="obcoin"></img>
            <ul className="flex text-laranja text-3xl w-[1200] place-content-evenly fonteBold">
                <li className="navbarHover">
                    App
                </li>
                <li className="navbarHover">
                        Cartões
                </li>
                {/* <ul>
                <li>Cartão Standart</li>
                <li>Cartão Black</li>
            </ul> */}
                <li className="navbarHover">
                    Benefícios
                </li>
                <li className="navbarHover">
                        Moeda
                </li>
                <li className="navbarHover">
                        Cultura
                </li>
                <li className="navbarHover">
                        Candidatura
                </li>
            </ul>
        </div>
    )
}

export default Navbar