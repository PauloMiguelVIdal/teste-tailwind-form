import React, { useContext} from "react";
import {CentraldeDadosContext } from "./CentralDeDadosContext";

function InfoCartão(props) {
    const {dadosNome} = useContext(CentraldeDadosContext);
    return (
        <div className="text-white text-xl">
            <h1 className="fonteRegular">{dadosNome}</h1>
        </div>
    )
}

export default InfoCartão