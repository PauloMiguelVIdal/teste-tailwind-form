import React from "react";
import recompensa from "./icon/recompensa.png"
import escudo from "./icon/escudo.png"

function PaginaListaFimBenefíciosCartãoBlack() {
    return (
        <div className="w-full h-[1024px]">
            <div className="flex flex-col items-center mt-[90px]">
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={recompensa} alt="recompensa"></img>
                    </div>
                    <div className="w-[860px] h-[200px]  ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Participe do nosso programa de recompensas premium, acumulando pontos valiosos a cada transação. Troque esses pontos por experiências exclusivas, upgrades de viagens e produtos de alta qualidade, elevando seu estilo de vida a um novo patamar.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={escudo} alt="escudo"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Desfrute de total tranquilidade durante suas viagens com nosso seguro abrangente, oferecendo cobertura para emergências médicas, cancelamentos e outros imprevistos.</h2>
                    </div>
                </div>
            </div>
            <div className="w-[calc(95%)] h-[40px] flex m-auto rounded-[40px] bg-gradient-to-r from-black to-roxo"></div>
            <h1 className="text-center fonteBold text-roxo text-[60px]  mb-[80px] mt-[160px]">BENEFÍCIOS ESPECIAIS</h1>
        </div>
    )
}

export default PaginaListaFimBenefíciosCartãoBlack