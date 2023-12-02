import React from "react";
import recompensa from "./icon/recompensa.png"
import escudo from "./icon/escudo.png"

function PaginaListaFimBenefíciosCartãoStandart() {
    return (
        <div className="w-full h-[1024px]">
            <div className="flex flex-col items-center mt-[90px]">
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={recompensa} alt="recompensa"></img>
                    </div>
                    <div className="w-[860px] h-[200px]  ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Participe do nosso programa de recompensas simples, acumulando pontos em cada transação. Com pontos facilmente resgatáveis, você pode aproveitar vouchers, descontos exclusivos ou até mesmo produtos. Além disso, os pontos acumulados no Plano de Benefícios podem ser trocados por produtos e concorrer a prêmios emocionantes.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={escudo} alt="escudo"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Sua segurança é nossa prioridade. Nosso Cartão Standard inclui recursos de proteção contra fraudes, garantindo a segurança de todas as suas transações. Assim, você pode usar seu cartão com confiança, sabendo que estamos comprometidos em proteger suas informações financeiras.</h2>
                    </div>
                </div>
            </div>
            <div className="w-[calc(95%)] h-[40px] flex m-auto rounded-[40px] bg-gradient-to-r from-roxo to-laranja"></div>
            <h1 className="text-center fonteBold text-roxo text-[60px]  mb-[80px] mt-[160px]">BENEFÍCIOS EXCLUSIVOS</h1>
        </div>
    )
}

export default PaginaListaFimBenefíciosCartãoStandart