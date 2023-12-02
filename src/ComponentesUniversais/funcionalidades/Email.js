import React, { useState,useContext } from "react";
import { CentraldeDadosContext } from "../CentralDeDados";

function Email() {
    const { dadosEmail, atualizarDadosEmail } = useContext(CentraldeDadosContext);

const [novoEmail, setNovoEmail] = useState('');

function handleChange(event){
let t = event.target.value
setNovoEmail(t)
}

const atualizarContexto = ()=>{
    atualizarDadosEmail(novoEmail)
}


    return (
        <div>
            <input
                type="text"
                value={novoEmail}
                onChange={handleChange}
                placeholder="Email"
                className="placeholder:text-white placeholder:opacity-70 z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px]"

            
            />
<button on onClick={atualizarContexto}>teste</button>
        </div>
    );
};



export default Email