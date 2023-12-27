import React from "react";
import {Email} from "../funcionalidades/Email";
import DúvidaEmail from "../funcionalidades/DúvidaEmail";
import { CentraldeDadosContext } from "../CentralDeDadosContext";
import { useContext,useState } from "react";
function FormFAQS(){
    const { dadosEmail, atualizarDadosEmail } = useContext(CentraldeDadosContext);
    const [novoEmail, setNovoEmail] = useState('');
    function atualizarContexto(){
        atualizarDadosEmail(novoEmail)
    }    
    function handleChange(event){
        setNovoEmail(event.target.value)
    }



    return(
        <div>
                <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                    
                </div>
                <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] ">
                    <Email handleChange={handleChange} novoEmail={novoEmail}></Email>
                </div>
                <div className=" w-[500px] h-[300px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] text-start">
                    <DúvidaEmail></DúvidaEmail>
                </div>
                <button onClick={atualizarContexto} className="w-[500px] h-[60px] text-[20px] fonteBold bg-roxo rounded-[20px] text-white mt-[30px] mb-[180px] z-50 box">Solicitar agora</button>
        </div>
    )
}

export default FormFAQS

//continuar teste