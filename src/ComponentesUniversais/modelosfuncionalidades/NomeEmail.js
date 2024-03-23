import React, { useContext, useState } from "react";
import { CentraldeDadosContext } from "../CentralDeDadosContext";

function NomeEmail( { toggleComponente }) {
    const { dadosEmail, AtualizarDadosEmail, 
            dadosNome, AtualizarDadosNome, 
            dadosNumeroCartão, AtualizarDadosNumerocartão, 
            dadosNumeroCVV, AtualizarDadosNumeroCVV } = useContext(CentraldeDadosContext);

    const [novoEmail, setNovoEmail] = useState('');
    const [novoNome, setNovoNome] = useState('');

    const handleClick = () => {
        // Altera o estado do componente desejado em PaginaCartãoBlack
        toggleComponente("solicitarCartaoBlack");

    function handleChangeEmail(event) {
        setNovoEmail(event.target.value);
    }

    function handleChangeNome(event) {
        setNovoNome(event.target.value.toUpperCase());
    }

    function gerarNumeroCartao() {
        return String(Math.random(22)).slice(2);
    }

    function gerarNumeroCVV() {
        return String(Math.floor(Math.random() * 1000));
    }

    function atualizarContexto() {
        if (novoEmail && novoNome) {
            const novoNumeroCartão = gerarNumeroCartao();
            const novoNumeroCVV = gerarNumeroCVV();
            AtualizarDadosEmail(novoEmail);
            AtualizarDadosNome(novoNome);
            AtualizarDadosNumerocartão(novoNumeroCartão);
            AtualizarDadosNumeroCVV(novoNumeroCVV);
        }
    }


    return (
        <div className="flex justify-center items-center flex-col w-[600px] h-[400px] rounded-[40px] border-laranja border-[2px] m-auto">
            <div className="w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Nome completo"
                    onChange={handleChangeNome}
                    value={novoNome}
                    className="placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px]"
                />
            </div>
            <div className="w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px]">
                <input
                    type="text"
                    onChange={handleChangeEmail}
                    value={novoEmail}
                    placeholder="Email"
                    className="placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px]"
                />
            </div>
            <button onClick={handleClick} className="w-[500px] h-[60px] text-[20px] fonteBold bg-laranja rounded-[20px] text-white mt-[30px] z-50">Solicitar agora</button>
        </div>
    )
}}

export default NomeEmail;