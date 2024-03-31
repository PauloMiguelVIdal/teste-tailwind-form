import React, { useContext, useState } from "react";
import { CentraldeDadosContext } from "../../CentralDeDadosContext";


function CostasCartãoBlackLimpo(props){
    const { dadosNumeroCartão,dadosNumeroCVV,versoCartão} = useContext(CentraldeDadosContext);
console.log(versoCartão)
  
    return (
        <div className=" origin-center flex justify-center items-center flex-row w-[400px] h-[600px] bg-gradient-to-tl from-black from-35% to-roxoForte to-65% rounded-[40px] ml-[200px] ">

            <div>
            <div className="w-[70px] h-[600px] bg-black relative top-[184px] left-[37px]"></div>
{/* asdasd */}
{versoCartão ? 
                (
                <div className="bg-tranparent w-[400px] h-[275px] rotate-90 flex flex-row relative bottom-[320px] left-[60px]">

                    <div className="bg-tranparent w-[200px] h-[275px] rotate-180 flex items-center flex-col justify-around">
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px]" >
                            <h4 className="text-white  fonteBold text-[15px]" >Ouvidoria:<br />
                                ouvidoria@OBank.com.br<br />
                                0800 887 0463</h4>
                        </div>

                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] flex justify-center items-center">

                            <h4 className="text-laranja fonteBold text-[15px]" >{dadosNumeroCartão}</h4>
                        </div>

                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] flex justify-center items-center">
                            <div className="w-[32px] h-[95px] bg-laranjaFraco rounded-[20px] rotate-90">
                                <h4 className="text-tranparent text-white fonteBold text-[15px] rotate-[-90deg] flex justify-center items-center relative top-[20px]" >{dadosNumeroCVV}</h4>
                                <div className="w-[32px] h-[55px] bg-roxoForte rounded-[20px] relative top-[40px] flex justify-center items-center">
                                    <h4 className="text-white  fonteBold text-[15px] rotate-[-90deg]" >cvv</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-tranparent flex items-center flex-col w-[200px] h-[275px] justify-around ">
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white fonteBold">Está com dúvida?<br />
                                Acesse o nosso app</h3>
                        </div>
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white fonteBold">Fale com a gente<br />
                                08005912117
                            </h3>
                        </div>
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white fonteBold">Outside Brazil <br />
                                1636 722 7111
                            </h3>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="bg-tranparent w-[400px] h-[275px] rotate-90 flex flex-row relative bottom-[320px] left-[60px]">

                    <div className="bg-tranparent w-[200px] h-[275px] rotate-180 flex items-center flex-col justify-around">
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px]" >
                            <h4 className="text-white  fonteBold text-[15px]" ><br />
                                <br />
                                </h4>
                        </div>

                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] flex justify-center items-center">

                            <h4 className="text-laranja fonteBold text-[15px]" >{dadosNumeroCartão}</h4>
                        </div>

                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] flex justify-center items-center">
                            <div className="w-[32px] h-[95px] bg-laranjaFraco rounded-[20px] rotate-90">
                                <h4 className="text-tranparent text-white fonteBold text-[15px] rotate-[-90deg] flex justify-center items-center relative top-[20px]" >{dadosNumeroCVV}</h4>
                                <div className="w-[32px] h-[55px] bg-roxoForte rounded-[20px] relative top-[40px] flex justify-center items-center">
                                    <h4 className="text-white  fonteBold text-[15px] rotate-[-90deg]" ></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-tranparent flex items-center flex-col w-[200px] h-[275px] justify-around ">
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white fonteBold"><br />
                                
                                </h3>
                        </div>
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white fonteBold">
                                                                <br />
                            </h3>
                        </div>
                        <div className="w-[195px] h-[55px] bg-tranparent rounded-[20px] bottom-[0px] left-[0px] rotate-180 ">
                            <h3 className="text-white fonteBold"> <br />
                                
                            </h3>
                        </div>
                    </div>
                </div>
                )
                }
                
                <div className="w-[87px] h-16 origin-top-left bottom-[140px] left-[160px] rotate-[-91.79deg] z-10 relative bg-neutral-600 rounded-full">
                    <div className="w-[73px] h-16 origin-top-left z-20 relative bg-gradient-to-b from-black to-white rounded-full"></div>
                </div>
                <h4 className="text-laranja fonteBold text-[20px] -rotate-90 relative left-[50px] bottom-[428px]">BLACK</h4>
            </div>
        </div>
    )
}


export default CostasCartãoBlackLimpo