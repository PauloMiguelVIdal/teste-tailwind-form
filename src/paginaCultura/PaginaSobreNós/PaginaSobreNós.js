import React from "react";
import Navbar from "../../ComponentesUniversais/Navbar";
function PaginaSobreNós() {
    return (
        <div className="w-full h-[1024px] bg-gradient-to-b from-laranja to-roxo">
            <Navbar></Navbar>
            <div className="w-full h-[1024px]">
                <div className="w-[1200px] h-[800px] flex justify-center items-center flex-col m-auto">
                    <h1 className="text-center text-[60px] fonteBold text-white mt-[115px] mb-[115px]">SOBRE NÓS</h1>
                    <div className="w-[1200px] h-[500px] flex justify-center items-center mb-240px">
                        <h2 className=" text-white text-[40px] fonteRegular text-center">Em um mundo em constante evolução, o Banco
                            Digital OBank emerge como uma força pioneira
                            na indústria financeira, redefinindo o conceito de
                            bancos tradicionais por meio da inovação e
                            tecnologia .Com uma visão ousada e uma abordagem
                            disruptiva, o OBank abraça a era digital, fornecendo
                            soluções financeiras ágeis, eficientes e seguras,
                            impulsionadas por sua própria criptomoeda, a OBCoin.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaSobreNós