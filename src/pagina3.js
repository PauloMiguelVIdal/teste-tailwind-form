import React from "react";
import appDeLado from "./image/app de lado.svg"
import Chamada from "./Chamada";
import IconesDowload from "./IconesDowload";
import SaibaMaisApp from "./SaibaMaisApp";
function Pagina3() {
    return (
        <div className="bg-gradient-to-br from-marinho to-roxo w-full h-[1024px]">
            <Chamada></Chamada>
            <IconesDowload></IconesDowload>
            <SaibaMaisApp></SaibaMaisApp>
                <img className="w-[800px] h-[798px] relative top-[-818px] left-[935px]" src={appDeLado} alt="appDeLado"></img>
        </div>
    )
}

export default Pagina3