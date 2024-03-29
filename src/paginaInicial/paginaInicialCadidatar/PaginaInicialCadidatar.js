import React from "react"
import Formulario from "./Formulario"
import NomeEmail from "../../ComponentesUniversais/modelosfuncionalidades/NomeEmail"
function PaginaInicialCadidatar(props){
    return(
<div className="h-screen w-full bg-gradient-to-b from-roxo to-marinho flex justify-center items-center" >
      <div className=" largura altura rounded-3xl border-2 flex justify-center flex-col">
      <div className="flex justify-center flex-col text-center ">
            <h1 className="text-white text-4xl pb-3 fonteBold">CANDIDATAR-SE</h1>
            <h3 className="text-white/50 text-x pb-12 fonteLight">APÓS RECEBIDO O SEU EMAIL, ENTRAREMOS EM CONTATO ENVIAREMOS MAIS INFORMAÇÕES
                SOBRE O PROCESSO SELETIVO E SEU ANDAMENTO</h3>
        </div>
        <div className='bg-marinho rounded-2xl flex self-center flex-col justify-center items-center p-8 box2'>
        {/* <NomeEmail></NomeEmail> */}
        <Formulario></Formulario>
        </div>
      </div>
</div>
)}

export default PaginaInicialCadidatar


