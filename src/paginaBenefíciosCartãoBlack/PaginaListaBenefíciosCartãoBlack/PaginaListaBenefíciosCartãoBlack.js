import React from "react";
import cashback from "./icon/cashback.png"
import desconto from "./icon/desconto.png"
import suporte from "./icon/apoio-suporte.png"
function PaginaListaBenefíciosCartãoBlack() {
    return (
        <div>
            <h1 className="text-center fonteBold text-roxo text-[60px]  mb-[120px]">BENEFÍCIOS</h1>
            <div className="flex flex-col items-center">
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={cashback} alt="cashback"></img>
                    </div>
                    <div className="w-[860px] h-[200px]  ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Ganhe cashback premium de 1,0% em todas as suas compras, oferecendo recompensas mais generosas e proporcionando economias substanciais em seu estilo de vida exclusivo.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={desconto} alt="desconto"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Desfrute de acesso exclusivo a conteúdo premium nas plataformas parceiras, como Netflix. Além disso, aproveite ofertas especiais e pré-lançamentos que tornam sua experiência de entretenimento verdadeiramente única.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex ">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={suporte} alt="suporte"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Desfrute de atendimento ao cliente prioritário, garantindo suporte rápido e personalizado sempre que precisar. Sua satisfação é nossa prioridade máxima.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaListaBenefíciosCartãoBlack