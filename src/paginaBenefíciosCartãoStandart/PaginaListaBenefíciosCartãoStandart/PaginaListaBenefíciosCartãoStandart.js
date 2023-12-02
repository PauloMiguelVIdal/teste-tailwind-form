import React from "react";
import cashback from "./icon/cashback.png"
import desconto from "./icon/desconto.png"
import suporte from "./icon/apoio-suporte.png"
function PaginaListaBenefíciosCartãoStandart() {
    return (
        <div>
            <h1 className="text-center fonteBold text-roxo text-[60px]  mb-[120px]">BENEFÍCIOS</h1>
            <div className="flex flex-col items-center">
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={cashback} alt="cashback"></img>
                    </div>
                    <div className="w-[860px] h-[200px]  ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Ganhe cashback em todas as suas compras, proporcionando uma economia imediata em seu orçamento. Com uma taxa competitiva de 0,5%, cada transação é uma maneira eficaz de acumular benefícios financeiros.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={desconto} alt="desconto"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Desfrute de ofertas exclusivas ao usar seu Cartão Standard em compras nas marcas parceiras. Na Amazon, além das ofertas exclusivas, você receberá 10% de desconto nos serviços de streaming e acumulará pontos no Plano de Benefícios, trocáveis por produtos e participação em sorteios especiais.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex ">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={suporte} alt="suporte"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Nosso suporte ao cliente está disponível 24 horas por dia, 7 dias por semana. Seja qual for a sua necessidade, nossa equipe está pronta para ajudar, proporcionando tranquilidade e confiança em cada interação.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaListaBenefíciosCartãoStandart