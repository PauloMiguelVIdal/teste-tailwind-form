import React from "react";
import { CentraldeDadosContext } from "../CentralDeDadosContext";
import { useContext, useState } from "react";
function FormFAQS() {
    const { dadosEmail, AtualizarDadosEmail } = useContext(CentraldeDadosContext);
    const [novoEmail, setNovoEmail] = useState('');
    
    const { dadosNome, AtualizarDadosNome } = useContext(CentraldeDadosContext);
    const [novoNome, setNovoNome] = useState('');

    const { dadosDúvida, AtualizarDadosDúvida } = useContext(CentraldeDadosContext);
    const [novaDúvida, setNovaDúvida] = useState('');

    function handleChangeEmail(event) {
        setNovoEmail(event.target.value)
    }

    function handleChangeNome(event) {
        setNovoNome(event.target.value)
    }

    function handleChangeDúvida(event) {
        setNovaDúvida(event.target.value)
    }


    function atualizarContexto() {
        if (novoEmail) {
            AtualizarDadosEmail(novoEmail)
        }
        if (novoNome) {
            AtualizarDadosNome(novoNome)
        }

        if(novaDúvida){
            AtualizarDadosDúvida(novaDúvida)
        }
        console.log(novoEmail)
        console.log(dadosEmail)
        console.log(dadosDúvida)
   
        console.log(novoNome)
        console.log(dadosNome)
    }

    return (
        <div>
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
            <input
                    type="text"
                    placeholder="Nome completo"
                    onChange={handleChangeNome}
                    value={novoNome}
                    className=" placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo  bg-opacity-20 rounded-[17.50px] "></input>
            </div>
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] ">
            <input
                    type="text"
                    onChange={handleChangeEmail}
                    value={novoEmail}
                    placeholder="Email"
                    className="placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px]"
                />
            </div>
            <div className=" w-[500px] h-[300px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] text-start">
                <div>
                    <div className="flex items-start">
                        <input 
                        type="text"
                        placeholder="Sua dúvida"
                        onChange={handleChangeDúvida}
                        value={novaDúvida}
                        className=" placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pb-[200px] pl-[10px] h-[270px] bg-roxo bg-opacity-20 rounded-[17.50px] text-left flex items-start p-[10px]"></input>
                    </div>
                </div>
            </div>
            <button onClick={atualizarContexto}
                className="w-[500px] h-[60px] text-[20px] fonteBold bg-roxo rounded-[20px] text-white mt-[30px] mb-[180px] z-50 box">
                Solicitar agora
            </button>
        </div>
    )
}

export default FormFAQS

//continuar teste