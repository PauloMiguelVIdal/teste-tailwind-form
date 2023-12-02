
import React from "react";
import obcoin from "../../Logo/OBCOIN svg.svg"
import binance from "../../logoParceiras/png-transparent-binance-macos-bigsur-icon-thumbnail-removebg-preview.png"
import setaLaranja from "./seta-direita-laranja.png"
function PaginaInvistaAgora() {
    return (
        <div className="flex justify-center items-center mb-[px] mt-[px] w-full h-[1024px]">
            <div className="w-[1200px] h-[800px] flex justify-center items-center flex-col">
                <h1 className="text-[60px] fonteBold text-roxo text-center mb-[105px]">INVISTA AGORA</h1>
                <div className="w-[1200px] h-[500px] flex justify-center align-center flex-col">
                    <div className="h-[200px] w-[1200px] flex justify-center items-center">
                        <img src={obcoin} className="w-[200px] h-[200px]"></img>
                        <div className="w-[50px] h-[50px] m-[20px] rounded-full bg-roxoForte"></div>
                        <div className="w-[50px] h-[50px] rounded-full bg-roxo"></div>
                        <div className="w-[50px] h-[50px] m-[20px] rounded-full bg-laranja"></div>
                        <img src={setaLaranja} className="w-[70px] h-[70px] mr-[20px]"></img>
                        <img src={binance} className="w-[200px] h-[200px]"></img>
                    </div>
                    <div className="w-[1000px] h-[200px] flex justify-center items-center m-auto">
                        <h4 className="text-roxo text-[30px] fonteLight text-center">
                        Aproveite nossa parceria exclusiva com a Binance e garanta uma redução especial em suas taxas de corretagem ao acessar o link abaixo. Não perca a oportunidade! Clique no botão 'Obter Desconto' para acessar a plataforma.
                        </h4>
                    </div>
                </div>
                <button className="w-[600px] h-[100px] rounded-[40px] bg-gradient-to-r from-roxo to-laranja">
                    <h4 className="text-white text-[40px] text-center fonteBold ">Obter desconto</h4>
                </button>
            </div>
        </div>
    )
}

export default PaginaInvistaAgora