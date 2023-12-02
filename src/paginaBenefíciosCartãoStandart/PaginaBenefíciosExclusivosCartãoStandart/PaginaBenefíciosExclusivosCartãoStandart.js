import React from "react";
import amazon from "../../logoParceiras/amazon-removebg-preview.png"
import netflix from "../../logoParceiras/png-transparent-netflix-logo-thumbnail-removebg-preview.png"
import binance from "../../logoParceiras/png-transparent-binance-macos-bigsur-icon-thumbnail-removebg-preview.png"
function PaginaBenefíciosExclusivosCartãoStandart() {
    return (
        <div className="h-[1024px] w-full">
            <div className="flex flex-col items-center mt-[20px]">
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img className="w-[120px] h-[120px] pt-[10px]"  src={amazon} alt="amazon"></img>
                    </div>
                    <div className="w-[860px] h-[200px]  ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Desfrute de 10% de desconto nos serviços de streaming e benefícios acumulativos em suas compras na Amazon, com a oportunidade de participar do Plano de Benefícios para trocar por produtos e concorrer a prêmios incríveis.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img className="w-[120px] h-[120px]" src={netflix} alt="netflix"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Ganhe 20% de desconto em qualquer plano de assinatura da Netflix, tornando sua experiência de entretenimento ainda mais acessível e agradável.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img className="w-[120px] h-[120px]"  src={binance} alt="binance"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Realize suas transações na Binance com uma taxa reduzida de 0,8%, em vez dos 1% normais, proporcionando economias adicionais em suas operações financeiras.</h2>
                    </div>
                </div>
            </div>
            <div className="w-[calc(95%)] h-[40px] flex m-auto rounded-[40px] bg-gradient-to-r from-roxo to-laranja"></div>
        </div>
    )
}

export default PaginaBenefíciosExclusivosCartãoStandart