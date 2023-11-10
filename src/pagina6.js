import React from "react";
import netflix from "./image/png-transparent-netflix-logo-thumbnail-removebg-preview.png"
import amazon from "./image/amazon-removebg-preview.png"
import binance from "./image/png-transparent-binance-macos-bigsur-icon-thumbnail-removebg-preview.png"
function Pagina6() {
    return (
        <section className="bg-gradient-to-b from-laranja to-roxo">
            <h1 className="text-white fonteBold text-[60px] text-center">PARCEIRA DAS GIGANTES DO MERCADO</h1>
            <h2 className="text-white fonteLight" >"Na OBank, nossa missão é proporcionar uma experiência financeira única. Com nossa própria criptomoeda e parcerias com gigantes do mercado, você desfruta de descontos exclusivos, conteúdo premium e oportunidades de investimento. Junte-se à revolução financeira com a OBank."</h2>
            <h4>Saiba mais sobre nossa Parcerias</h4>
            <div>
                <div className="w-[220px] h-[220px] border-4 border-white rounded-2xl flex justify-center items-center"><img className="w-[180px] h-[180px]" src={netflix}></img></div>
                <div className="w-[220px] h-[220px] border-4 border-white rounded-2xl flex justify-center items-center"><img className="w-[180px] h-[180px]" src={amazon}></img></div>
                <div className="w-[220px] h-[220px] border-4 border-white rounded-2xl flex justify-center items-center"><img className="w-[180px] h-[180px]" src={binance}></img></div>
            </div>
        </section>
    )
}

export default Pagina6 