import React, { useContext,useState } from "react";
import NomeCompleto from "../funcionalidades/NomeCompleto";
import { CentraldeDadosProvider,  CentraldeDadosContext  } from "../CentralDeDados";
import {Email} from "../funcionalidades/Email";

function NomeEmail() {
    const { dadosEmail, AtualizarDadosEmail } = useContext(CentraldeDadosContext);
    const [novoEmail, setNovoEmail] = useState('');


    function handleChange(event){
        setNovoEmail(event.target.value)
    }

    function atualizarContexto(){
        AtualizarDadosEmail(novoEmail)
    }

    return (
        <div className="flex justify-center items-center flex-col w-[600px] h-[400px] rounded-[40px] border-laranja border-[2px] m-auto " >
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                <NomeCompleto ></NomeCompleto>
            </div>
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px]">
                <Email handleChange={handleChange} novoEmail={novoEmail}></Email>
            </div>
            <button onClick={atualizarContexto} className="w-[500px] h-[60px] text-[20px] fonteBold bg-laranja rounded-[20px] text-white mt-[30px] z-50">Solicitar agora</button>
        </div>
    )
}

export default NomeEmail

