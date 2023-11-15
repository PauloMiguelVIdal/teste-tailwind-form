import React from "react";
import suporte from "./icon/apoio-suporte.png"
import campainha from "./icon/campainha-do-concierge.png"
import cashback from "./icon/cashback.png"
import desconto from "./icon/desconto.png"
import recompensa from "./icon/recompensa.png"
import escudo from "./icon/escudo.png"

function PaginaBeneficiosBlack() {
    return (
        <div className="flex place-content-end flex-col w-full h-[1024px] mt-[120px]">
            <h1 className="text-center fonteBold text-roxo text-[60px]  mb-[120px]">BENEFÍCIOS EXCLUSIVOS</h1>
            <div>
                <div className="grid grid-rows-3 grid-cols-2 ">
                    <div className="flex place-content-end">
                        <div className="w-[625px] h-[200px] flex flex-row items-center mb-[75px]">
                            <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                                <img src={cashback} className="flex justify-center items-center"></img>
                            </div>
                            <div className="w-[425px] h-[200px] flex items-center justify-center">
                                <h4 className="text-[20px] fonteRegular text-center text-roxo">Ganhe 1,0% cashback em<br />todas as compras, com<br />recompensas generosas,<br /> proporcionando economias<br />substanciais.</h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-[625px] h-[200px] flex flex-row items-center mb-[75px]">
                            <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                                <img src={recompensa} className="flex justify-center items-center"></img>
                            </div>
                            <div className="w-[425px] h-[200px] flex items-center justify-center">
                                <h4 className="text-[20px] fonteRegular text-center text-roxo">Tenha acesso a um serviço de<br />concierge dedicado para<br /> auxiliar em reservas,<br /> planejamento de viagens e<br /> outras conveniências<br /> personalizadas.</h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex place-content-end">
                        <div className="w-[625px] h-[200px] flex flex-row items-center mb-[75px]">
                            <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                                <img src={desconto} className="flex justify-center items-center"></img>
                            </div>
                            <div className="w-[425px] h-[200px] flex items-center justify-center">
                                <h4 className="text-[20px] fonteRegular text-center text-roxo">Desfrute de acesso exclusivo <br /> a conteúdo premium nas<br /> plataformas parceiras, como<br /> Netflix, bem como ofertas<br /> especiais e pré-lançamentos.</h4>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="w-[625px] h-[200px] flex flex-row items-center mb-[75px]">
                            <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                                <img src={escudo} className="flex justify-center items-center"></img>
                            </div>
                            <div className="w-[425px] h-[200px] flex items-center justify-center">
                                <h4 className="text-[20px] fonteRegular text-center text-roxo">Tenha acesso a um serviço de<br />concierge dedicado para<br /> auxiliar em reservas,<br /> planejamento de viagens e<br /> outras conveniências<br /> personalizadas.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex place-content-end">
                        <div className="w-[625px] h-[200px] flex flex-row items-center mb-[0px]">
                            <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                                <img src={campainha} className="flex justify-center items-center"></img>
                            </div>
                            <div className="w-[425px] h-[200px] flex items-center justify-center">
                                <h4 className="text-[20px] fonteRegular text-center text-roxo">Tenha acesso a um serviço de<br />concierge dedicado para<br /> auxiliar em reservas,<br /> planejamento de viagens e<br /> outras conveniências<br /> personalizadas.</h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="w-[625px] h-[200px] flex flex-row items-center mb-[0px]">
                            <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                                <img src={suporte} className="flex justify-center items-center"></img>
                            </div>
                            <div className="w-[425px] h-[200px] flex items-center justify-center">
                                <h4 className="text-[20px] fonteRegular text-center text-roxo">Tenha acesso a um serviço de<br />concierge dedicado para<br /> auxiliar em reservas,<br /> planejamento de viagens e<br /> outras conveniências<br /> personalizadas.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaginaBeneficiosBlack