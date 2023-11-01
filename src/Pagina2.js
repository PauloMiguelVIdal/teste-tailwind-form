import React from "react";
import Cartão1 from "./Cartão1";
function Pagina2(props){
    return(
<div className="h-screan w-scream bg-gradient-to-br from-marinho to-roxo">
<div className="flex justify-center flex-col text-center ">
            <h1 className="text-white text-4xl pb-3">CANDIDATAR-SE</h1>
            <h3 className="text-white/50 text-x pb-12">APÓS RECEBIDO O SEU EMAIL, ENTRAREMOS EM CONTATO ENVIAREMOS MAIS INFORMAÇÕES
                SOBRE O PROCESSO SELETIVO E SEU ANDAMENTO</h3>
                <div>
                    <Cartão1></Cartão1>
                </div>
        </div>
</div>
    )
}

export default Pagina2