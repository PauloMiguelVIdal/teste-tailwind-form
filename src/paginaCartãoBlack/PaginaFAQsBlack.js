import React, { useState } from "react";

function PaginaFAQsBlack(){
    return (
        <div className="w-full h-[1024px] flex justify-center items-center flex-col">
            <h1 className="text-center text-[60px] fonteBold text-roxo mt-[115px] mb-[100px]">FAQS</h1>
            <div className="flex justify-center items-center flex-col m-auto " >
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
                <input type="text" placeholder="Nome completo" className="z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px] "></input>
            </div>
            <div className=" w-[500px] h-[80px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px]">
                <input type="text" placeholder="Email" className="z-50 text-[25px] fonteBold w-[470px] pl-[10px] h-[60px] bg-roxo bg-opacity-20 rounded-[17.50px] "></input>
            </div>
            <div className=" w-[500px] h-[300px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center mt-[17px] text-start">
                <div className="flex items-start">
                <input type="text" placeholder="Sua dúvida" className="z-50 text-[25px] fonteBold w-[470px] pb-[200px] pl-[10px] h-[270px] bg-roxo bg-opacity-20 rounded-[17.50px] text-left flex items-start"></input>
                </div>
            </div>
            <button className="w-[500px] h-[60px] text-[20px] fonteBold bg-roxo rounded-[20px] text-white mt-[30px] mb-[180px] z-50">Solicitar agora</button>
        </div>
        </div>
    )
}

export default PaginaFAQsBlack