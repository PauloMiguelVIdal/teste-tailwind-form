import React from "react";
import CartõesSuspensos from "../../ComponentesUniversais/Cartões/variaçõesCartões/CartõesSuspensos";
function PaginaInicialBenefícios(){
    return(
        <section className="bg-white w-full h-[1024px] overflow-hidden">
            <h1 className="text-roxo text-[60px] text-center pt-12 mb-12 fonteBold">BENEFÍCIOS EXCLUSIVOS</h1>
            <h2 className="text-roxo/70 text-[40px] ml-[200px] fonteLight">Cliente OBank, aproveite nosso cartão exclusivo, acesso<br></br>
a conteúdo premium, descontos especiais, assistência<br></br>
 financeira personalizada, tecnologia de segurança<br></br>
avançada, facilidade de gerenciamento financeiro e<br></br>
atendimento ao cliente premium.<br></br> 
Saiba mais agora!" </h2>

<button className="linkTexto ml-[200px] pt-[350px]">
        <a href="teste" className="">
        <h4 className="text-laranja text-[40px] fonteBold"> Saiba mais sobre benefícios </h4>
    </a>
    </button>
        

<CartõesSuspensos></CartõesSuspensos>

          

        </section>
    )
}

export default PaginaInicialBenefícios