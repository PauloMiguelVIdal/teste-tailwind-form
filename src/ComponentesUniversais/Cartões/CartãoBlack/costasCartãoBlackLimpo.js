import React, { useContext, useState } from "react";
import { CentraldeDadosContext } from "../../CentralDeDadosContext";


function CostasCartãoBlackLimpo() {
    const { dadosNumeroCartão } = useContext(CentraldeDadosContext);
    const { dadosNumeroCVV } = useContext(CentraldeDadosContext);
    return (
        <div className="origin-center flex justify-center items-center flex-row w-110 h-[37.5rem] bg-gradient-to-tl from-black from-35% to-roxoForte to-65% rounded-[40px] ml-10">
            <div className="w-[70px] h-[600px] bg-black relative z-10 mr-[130px]"></div>

            <div>

                <div className="bg-white w-[400px] h-[275px] rotate-90 flex flex-row">


                    <div className="bg-black w-[200px] h-[275px] rotate-180 flex items-center flex-col justify-around">
                        <div className="w-[195px] h-[55px] bg-laranja rounded-[20px]" >
                            <h4 className="text-white  fonteBold text-[15px]" >Ouvidoria:<br />
                                ouvidoria @OBank.com.br<br />
                                0800 887 0463</h4>
                        </div>

                        <div className="w-[30px] h-[100px] bg-laranja rounded-[20px]">
                            <h4 className="text-laranja fonteBold text-[15px]" >{dadosNumeroCartão}</h4>
                        </div>

                        <div className="rotate-90">
                            <div className="w-[27px] h-[95px] bg-laranjaFraco rounded-[20px] ">
                                <div className="w-[32px] h-[55px] bg-roxoForte rounded-[20px]">
                                    <h4 className="text-white  fonteBold text-[15px] " >cvv</h4>
                                </div>
                                <h4 className="text-white fonteBold text-[15px]" >{dadosNumeroCVV}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black flex items-center flex-col w-[200px] h-[275px] justify-around ">
                        <div className="w-[195px] h-[55px] bg-laranja rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white">Está com dúvida?<br />
                                Nosso app póde te ajudar.</h3>
                        </div>
                        <div className="w-[195px] h-[55px] bg-laranja rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white">Fale com a gente<br />
                                08005912117
                            </h3>
                        </div>
                        <div className="w-[195px] h-[55px] bg-laranja rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white">Outside Brazil <br />
                                1636 722 7111
                            </h3>
                        </div>
                    </div>
                </div>

                {/* parte do cartção black */}
                <div className="w-[87px] h-16 origin-top-left top-[280px] right-[50px] rotate-[-91.79deg] z-10 relative bg-neutral-600 rounded-full">
                    <div className="w-[73px] h-16 origin-top-left z-20 relative bg-gradient-to-b from-black to-white rounded-full"></div>
                </div>
                <h4 className="text-laranja fonteBold text-[20px] -rotate-90 relative right-[90px] top-[205px]">BLACK</h4>
            </div>
        </div>
    )
}

export default CostasCartãoBlackLimpo