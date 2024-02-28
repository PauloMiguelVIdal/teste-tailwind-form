import React from "react";
import appDeLado from "./app de lado.svg"
import IconesDowload from "./IconesDowload";
import SaibaMaisApp from "../../SaibaMaisApp";
function PaginaInicialApp() {
    return (
        <div className="bg-gradient-to-br from-marinho to-roxo w-full h-[1024px] ">
           <h2 className="text-[40px] text-white pl-[200px] pt-[145px] fonteLight">
                O OBank é a revolução em serviços<br></br>
                financeiros! Baixe agora e<br></br>
                experimente o melhor da<br></br>
                tecnologia financeira, com<br></br>
                segurança e facilidade<br></br>
                sem igual.</h2>
            <IconesDowload></IconesDowload>
            <SaibaMaisApp></SaibaMaisApp>
                <img className="w-[800px] h-[798px] relative top-[-818px] left-[670px]" src={appDeLado} alt="appDeLado"></img>
        </div>
    )
}

export default PaginaInicialApp