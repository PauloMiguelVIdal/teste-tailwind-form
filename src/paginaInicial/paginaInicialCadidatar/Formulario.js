import React, { useState } from "react";

function Formulario(props) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")

    function mudançaNome(event) {
        let n = event.target.value;
        setNome(n)
    }

    function mudançaEmail(event) {
        let e = event.target.value;
        setEmail(e)
    }

    function addInfomações(event) {
alert("ok, email enviado")
    }

    return (
        <form className="flex flex-col">
            <div className="w-[32rem] min-h-[18rem] bg-roxo/10 flex items-center justify-center flex-col">
            <input className=" w-[28rem] min-h-[5rem] bg-roxo/20 box py-1 px-2 text-roxo text-3xl placeholder-white focus:outline-roxo" type="text" placeholder="Seu nome" value={nome} onChange={mudançaNome}></input>
            <input className=" mt-4 w-[28rem] min-h-[5rem] bg-roxo/20 box py-1 px-2 text-roxo text-3xl placeholder-white focus:outline-roxo" type="text" placeholder="Seu email" value={email} onChange={mudançaEmail}></input>
            </div>
                <button className="mt-8 bg-gradient-to-r from-roxo to-laranja w-[32rem] min-h-[6rem] rounded-3xl text-white text-4xl box" onClick={addInfomações}>ENVIAR</button>
        </form>
    )

}
export default Formulario