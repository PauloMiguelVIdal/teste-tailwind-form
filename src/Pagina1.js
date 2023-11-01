import React from "react"
import Topo from "./Topo"
import Formulario from "./Formulario"




function Pagina1(props){
    return(
<div className="h-screen w-screen bg-gradient-to-br from-marinho to-roxo flex justify-center items-center" >
      <div className=" largura altura rounded-3xl border-2 flex justify-center flex-col">
      <Topo className=""></Topo>
        <div className='bg-white rounded-2xl flex self-center flex-col justify-center items-center p-8 box2'>
        <Formulario></Formulario>
        </div>
      </div>
</div>
)}

export default Pagina1


