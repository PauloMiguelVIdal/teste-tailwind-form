import React from "react";
import netflix from "../../logoParceiras/png-transparent-netflix-logo-thumbnail-removebg-preview.png"
import amazon from "../../logoParceiras/amazon-removebg-preview.png"
import binance from "../../logoParceiras/png-transparent-binance-macos-bigsur-icon-thumbnail-removebg-preview.png"
function PaginaInicialParceiras() {
    return (
        <section className="bg-gradient-to-b from-laranja to-roxo w-full h-[1024px]">
            <h1 className="text-white fonteBold text-[60px] text-center pt-12 mb-12">PARCEIRA DAS GIGANTES DO MERCADO</h1>
            <h2 className="text-white fonteLight text-[40px] ml-[200px]">"Na OBank, nossa missão é <br></br>
            proporcionar uma experiência <br></br>
            financeira única. Com nossa <br></br>
            própria criptomoeda e parcerias <br></br>
            com gigantes do mercado, você <br></br>
            desfruta de descontos <br></br>
            exclusivos, conteúdo premium e <br></br>
            oportunidades de investimento. <br></br>
            Junte-se à revolução financeira <br></br>
            com a OBank."</h2>
            <button className="linkTexto ml-[200px] mt-[150px]">
        <a href="teste" className="">
        <h4 className="text-laranja fonteBold  text-[40px] " >Saiba mais sobre nossa Parcerias</h4>
    </a>
    </button>
            <div className="relative ml-[1000px] bottom-[820px]">
                <div className="w-[220px] h-[220px] border-4 border-white rounded-2xl flex justify-center items-center"><img className="w-[180px] h-[180px]" src={netflix} alt="netflix"></img></div>
                <div className="w-[220px] h-[220px] border-4 border-white rounded-2xl flex justify-center items-center mt-6"><img className="w-[180px] h-[180px]" src={amazon} alt="amazon"></img></div>
                <div className="w-[220px] h-[220px] border-4 border-white rounded-2xl flex justify-center items-center mt-6"><img className="w-[180px] h-[180px]" src={binance} alt="binance"></img></div>
            </div>
        </section>
    )
}

export default PaginaInicialParceiras