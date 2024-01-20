import React from "react";
import Obcoin from "../../Logo/OBCOIN svg.svg"
function PaginaInicialCriptomoeda() {
    return (
        <section className="bg-white w-full h-[1024px] ">
            <h1 className=" text-roxo text-[60px] text-center pt-12 mb-12 fonteBold">Invista em Nossa Criptomoeda OBcoin!</h1>
            <h2 className="text-roxo/70 text-[40px] ml-[200px] fonteLight">Cliente OBank, além de nossos benefícios exclusivos,<br></br>
                você terá a oportunidade de investir <br></br>
                na OBcoin, uma das mais estáveis <br></br>
                e com maior crescimento nos <br></br>
                últimos anos. <br></br>
                Desfrute dos benefícios da <br></br>
                descentralização, com transações <br></br>
                eficientes e seguras, privacidade <br></br>
                aprimorada e um incrível potencial<br></br>
                de crescimento. Saiba mais agora <br></br>
                e participe do futuro das finanças!</h2>
            <button className="linkTexto ml-[200px] pt-[50px]">
                <a href="criptomoeda" className="">
                    <h4 className="text-laranja text-[40px]  fonteBold">Saiba mais sobre a OBcoin</h4>
                </a>
            </button>
            <img className="relative left-[1200px] bottom-[620px] box4" width={550} src={Obcoin} alt="obcoin"></img>
        </section>
    )
}

export default PaginaInicialCriptomoeda