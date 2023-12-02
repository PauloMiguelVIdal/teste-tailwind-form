import React from "react";
import iconCartão from "./icon/cartao-do-banco.png"
import vip from "./icon/vip.png"
import campainha from "./icon/campainha-do-concierge.png"

function PaginaBenefíciosEspeciaisCartãoBlack() {
    return (
        <div className="h-[1024px] w-full">
            <div className="flex flex-col items-center mt-[20px]">
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={iconCartão} alt="recompensa"></img>
                    </div>
                    <div className="w-[860px] h-[200px]  ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Tenha um limite de crédito infinito para maior flexibilidade financeira. Seu Cartão Black é a chave para realizar compras significativas com facilidade.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={vip} alt="escudo"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Como titular do Cartão Black, você terá acesso exclusivo a eventos VIP e experiências premium. Desfrute de ingressos prioritários, áreas VIP em shows, eventos esportivos e outras experiências culturais exclusivas. Este benefício proporciona a você a oportunidade de vivenciar momentos inesquecíveis, tornando cada transação com o Cartão Black uma porta de entrada para experiências extraordinárias.</h2>
                    </div>
                </div>
                <div className="w-[1200px] flex mb-[90px]">
                    <div className="flex justify-center items-center w-[200px] h-[200px] round-[40px] border-roxo border-4 rounded-[40px]">
                        <img src={campainha} alt="escudo"></img>
                    </div>
                    <div className="w-[860px] h-[200px] ml-[65px] mr-[65px] flex items-center justify-center">
                        <h2 className="text-center fonteRegular text-roxo text-[25px]">Nossa equipe de concierge dedicada está pronta para atender às suas necessidades, desde reservas em restaurantes até o planejamento de viagens. Viva com estilo e deixe-nos cuidar dos detalhes para você.</h2>
                    </div>
                </div>
            </div>
            <div className="w-[calc(95%)] h-[40px] flex m-auto rounded-[40px] bg-gradient-to-r from-black to-roxo mb-[90px]"></div>
        </div>
    )
}

export default PaginaBenefíciosEspeciaisCartãoBlack