import React, { useContext, useState } from "react";
import {CentraldeDadosContext } from "../CentralDeDadosContext";

function NomeEmail() {
    const { dadosEmail, AtualizarDadosEmail } = useContext(CentraldeDadosContext);
    const [novoEmail, setNovoEmail] = useState('');
    
    const { dadosNome, AtualizarDadosNome } = useContext(CentraldeDadosContext);
    const [novoNome, setNovoNome] = useState('');
    
    
    const { dadosNumeroCartão, AtualizarDadosNumerocartão } = useContext(CentraldeDadosContext);
    const [novoNumeroCartão, setNovoNumeroCartão] = useState('');




    function handleChangeEmail(event) {
        setNovoEmail(event.target.value)
    }

    function handleChangeNome(event) {
        const novoValor = event.target.value || "";
        setNovoNome(novoValor.toUpperCase())
    }

    function geradorCartão(){
        let numeroCartão = String(Math.random(22)).slice(2)
        console.log(numeroCartão)
        setNovoNumeroCartão(numeroCartão)
    }

    function atualizarContexto() {
geradorCartão()

        if (novoEmail) {
            AtualizarDadosEmail(novoEmail)
        }
        if (novoNome) {
            AtualizarDadosNome(novoNome)
            AtualizarDadosNumerocartão(novoNumeroCartão)
        }
        
        

        console.log(novoEmail)
        console.log(dadosEmail)
   
        console.log(novoNome)
        console.log(dadosNome)
   
        console.log(novoNumeroCartão)
        console.log(dadosNumeroCartão)
    }


    return (
        <div className="flex justify-center items-center flex-col w-[600px] h-[400px] rounded-[40px] border-laranja border-[2px] m-auto " >
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                <div>
                    <input 
                    type="text" 
                    placeholder="Nome completo"
                    onChange={handleChangeNome}
                    value={novoNome}
                    className=" placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo  bg-opacity-20 rounded-[17.50px] "></input>
                </div>
            </div>
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px]">
                <input
                    type="text"
                    onChange={handleChangeEmail}
                    value={novoEmail}
                    placeholder="Email"
                    className="placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px]"
                />
            </div>
            <button onClick={atualizarContexto} className="w-[500px] h-[60px] text-[20px] fonteBold bg-laranja rounded-[20px] text-white mt-[30px] z-50">Solicitar agora</button>
        </div>
    )
}

export default NomeEmail

