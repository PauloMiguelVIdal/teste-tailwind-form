import React from "react"   
import Navbar from "../../ComponentesUniversais/Navbar"
import obcoin from "../../Logo/OBCOIN svg.svg"

export default function TelaInicialBenefícios() {
    return (
        <div>
            <div className="w-full h-[1024px] bg-gradient-to-br from-laranja to-roxo">
                <div className="h-[34rem] w-full bg-transparent">
                    <Navbar/>
                </div>
                <h1 className="text-center text-[100px] text-white relative bottom-[300px] fonteBold">BENEFÍCIOS OBANK</h1>
                <div className="bg-white h-[22.5rem] w-full relative bottom-[30px] ">
                    <img className="w-[340px] h-[340px] relative m-auto bottom-[200px]" src={obcoin}></img>
                </div>
            </div>
        </div>
    )
}
