import React from "react";

function PaginaFormularioCartãoStandartResposta(){
    return(
        <div className="w-full h-[1024px] bg-gradient-to-b from-roxo to-roxoForte">
            <h1 className="text-laranja text-[100px] text-center fonteBold pt-[0px] relative z-10 mb-[70px]">Olá, GUTO</h1>
            <h2 className="text-[40px] text-roxoForte text-center fonteBold mb-[50px]">Solicitação realizada com sucesso</h2>
            <h4 className="text-center text-[40px] text-white fonteLight">A partir de agora, nossos especialistas <br /> estarão revisando cuidadosamente seu <br /> perfil para verificar se você atende a todos <br /> os requisitos necessários. Aguardamos a <br /> oportunidade de entrar em contato via <br />e-mail dentro do prazo de 3 dias<br /> úteis, fornecendo informações adicionais<br /> sobre o processo.</h4>
            <div>
            <button className="linkTexto mt-[115px]  ml-[100px]">
                <a href="teste" className="">
                <h4 className="text-[40px] text-laranja fonteBold">Solicitar outro Cartão Standart</h4>
                </a>
                </button>
            </div>
        </div>
    )
}

export default PaginaFormularioCartãoStandartResposta