import React from "react";
import tecnologia from "../src/iconesPaginaInicial/tenologia.png"
import criptomoeda from "../src/iconesPaginaInicial/criptomoeda.png"
import segurança from "../src/iconesPaginaInicial/escudo.png"
import inovação from "../src/iconesPaginaInicial/inovacao.png"
function ContainerFundamentos() {
    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-[50px] mt-20 text-white text-3xl fonteLight">
            <div>
                <div className="w-[200px] min-h-[200px] border-2 rounded-2xl border-laranja bg-transparent gr flex justify-center items-center">
                    <img width={128} height={128} src={tecnologia} alt="tecnologia"></img>
                </div>
                <h4 className="mt-2">Tecnologia</h4>
            </div>

            <div>
                <div className="w-[200px] min-h-[200px] border-2 rounded-2xl border-laranja bg-transparent flex justify-center items-center">
                    <img width={128} height={128} src={criptomoeda} alt="criptomoeda"></img>
                </div>
                <h4 className="mt-2">Criptomoeda</h4>
            </div>

            <div>
                <div className="w-[200px] min-h-[200px] border-2 rounded-2xl border-laranja bg-transparent flex justify-center items-center">
                    <img width={128} height={128} src={segurança} alt="segurança"></img>
                </div>
                <h4 className="mt-2">Segurança</h4>
            </div>
            
            <div>
                <div className="w-[200px] min-h-[200px] border-2 rounded-2xl border-laranja bg-transparent flex justify-center items-center">
                    <img width={128} height={128} src={inovação} alt="inovação"></img>
                </div>
                <h4 className="mt-2">Inovação</h4>
            </div>
        </div>
    )
}

export default ContainerFundamentos