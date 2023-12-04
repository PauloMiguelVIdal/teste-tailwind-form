import React from "react";
import NomeCompleto from "../funcionalidades/NomeCompleto";
import Email from "../funcionalidades/Email";
import DúvidaEmail from "../funcionalidades/DúvidaEmail";
function FormFAQS(){
    return(
        <div>
                <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                    <NomeCompleto></NomeCompleto>
                </div>
                <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] ">
                    <Email></Email>
                </div>
                <div className=" w-[500px] h-[300px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] text-start">
                    <DúvidaEmail></DúvidaEmail>
                </div>
                <button onClick={handleAtualizarEmail} className="w-[500px] h-[60px] text-[20px] fonteBold bg-roxo rounded-[20px] text-white mt-[30px] mb-[180px] z-50 box">Solicitar agora</button>
        </div>
    )
}

export default FormFAQS