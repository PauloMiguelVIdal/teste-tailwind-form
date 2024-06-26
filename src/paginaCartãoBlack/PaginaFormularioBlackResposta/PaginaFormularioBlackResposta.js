import React, { useContext} from "react";
import { CentraldeDadosContext } from "../../ComponentesUniversais/CentralDeDadosContext";




function PaginaFormularioBlackResposta() {
    const { dadosEmail, AtualizarDadosEmail, 
        dadosNome, AtualizarDadosNome, 
        dadosNumeroCartão, AtualizarDadosNumerocartão, 
        dadosNumeroCVV, AtualizarDadosNumeroCVV,
        estadoFormulário ,AtualizarEstadoFormulário,dadosPrimeirosNome
    } 
        = useContext(CentraldeDadosContext);

function atualizarEstado(){
    AtualizarEstadoFormulário(!estadoFormulário)
AtualizarDadosNumeroCVV("")
AtualizarDadosNumerocartão("")
AtualizarDadosNome("")
AtualizarDadosEmail("")

}

    console.log(estadoFormulário)
    if(estadoFormulário == false){
    return (
        <div className="w-full h-[1024px] bg-gradient-to-b from-roxoForte to-black">
            <h1 className="text-laranja text-[80px] text-center fonteBold pt-[20px] relative z-10 mb-[70px]">OLÁ, {dadosPrimeirosNome}</h1>
            <h2 className="text-[40px] text-roxo text-center fonteBold mb-[50px]">Solicitação realizada com sucesso</h2>
            <h4 className="text-center text-[40px] text-white fonteLight">A partir de agora, nossos especialistas <br /> estarão revisando cuidadosamente seu <br /> perfil para verificar se você atende a todos <br /> os requisitos necessários. Aguardamos a <br /> oportunidade de entrar em contato via <br />e-mail dentro do prazo de 3 dias<br /> úteis, fornecendo informações adicionais<br /> sobre o processo.</h4>
            <div>
                <button className="linkTexto mt-[115px]  ml-[100px]" onClick={atualizarEstado}>
                    <a className="">
                        <h4 className="text-[40px] text-laranja fonteBold">Solicitar outro Cartão Black</h4>
                    </a>
                </button>
            </div>
        </div>
    )
}
}

export default PaginaFormularioBlackResposta