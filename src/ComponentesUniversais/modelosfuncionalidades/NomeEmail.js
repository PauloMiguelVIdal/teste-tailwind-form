import React from "react";
import NomeCompleto from "../funcionalidades/NomeCompleto";
import { CentraldeDadosProvider } from "../CentralDeDados";
import Email from "../funcionalidades/Email";
function NomeEmail() {
    return (
        <CentraldeDadosProvider>
        <div className="flex justify-center items-center flex-col w-[600px] h-[400px] rounded-[40px] border-laranja border-[2px] m-auto " >
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                <NomeCompleto ></NomeCompleto>
            </div>
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px]">
                <Email ></Email>
            </div>
            <button onClick={handleAtualizarEmail} className="w-[500px] h-[60px] text-[20px] fonteBold bg-laranja rounded-[20px] text-white mt-[30px] z-50">Solicitar agora</button>
        </div>
        </CentraldeDadosProvider>
    )
}

export default NomeEmail

