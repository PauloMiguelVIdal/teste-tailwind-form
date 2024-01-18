import React from "react";
import obcoin from "../../Logo/OBCOIN svg.svg"
import InfoCartão from "../../ComponentesUniversais/InfoCartão";
import chip from "../../ComponentesUniversais/Cartões/iconParaCartão/chip-de-cartao-de-credito (1).png"
function PaginaInicialCartões(props) {
    return (

        <div className="w-full h-[64rem] bg-gradient-radial from-roxoForte to-marinho">
            <div className="h-[41.5rem] w-full bg-transparent">
                <div className="flex justify-center flex-col text-center z-1">
                    {/* <h1 className="text-white/50 text-xl mt-24 pb-4">CARTÕES</h1> */}
                    <h3 className="text-white text-6xl mt-24 pb-12 fonteBold">CARTÕES PARA ATENDER AS SUAS NECESSIDADES</h3>
                    <div className="flex place-content-evenly mt-[70px]">

                        <a href="cartãoStandart">
                            <div className=" origin-center flex justify-center items-center flex-col w-110 h-[37.5rem] bg-gradient-to-br from-roxoForte via-roxo to-laranja rounded-[40px] hover:origin-center hover:rotate-12 transition-all box3" >
                                <div className="flex justify-center items-center flex flex-col rounded-3xl border-white/20 w-[22.5rem] h-[35rem] bg-transparent border-2 ">
                                    <img className="w-[10rem] h-[10rem] m-9" src={obcoin} alt="obcoin"></img>
                                    <InfoCartão></InfoCartão>
                                    <h1 className="text-laranja text-4xl mt-8 fonteBold">STANDART</h1>
                                    <img className="rotate-90 mb-[4.31rem] mt-8" src={chip} alt="chip"></img>
                                </div>
                            </div>
                        </a>

                        <a href="cartãoBlack">
                            <div className="origin-center flex justify-center items-center flex-col w-110 h-[37.5rem] bg-gradient-to-br from-black from-35% to-roxoForte to-65% rounded-[40px] hover:origin-center hover:rotate-12 transition-all box3">
                                <div className="flex justify-center items-center flex flex-col rounded-3xl border-laranja w-[22.5rem] h-[35rem] bg-transparent border-2 ">
                                    <img className="w-[10rem] h-[10rem] m-9" src={obcoin} alt="obcoin"></img>
                                    <InfoCartão></InfoCartão>
                                    <h1 className="text-laranja text-4xl mt-8 fonteBold">BLACK</h1>
                                    <img className="rotate-90 mb-[4.31rem] mt-8" src={chip} alt="chip"></img>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>



            <div className="bg-white h-[22.5rem] w-full">
                <button className="linkTexto ml-[200px] ml-[100px] pt-[280px]">
                    <a href="cartões" className="">
                        <h4 className="  text-[40px] fonteBold text-laranja">saiba mais sobre cartões</h4>
                    </a>
                </button>

            </div>
        </div>
    )
}

export default PaginaInicialCartões