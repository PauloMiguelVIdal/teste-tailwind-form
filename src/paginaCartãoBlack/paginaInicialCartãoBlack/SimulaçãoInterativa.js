import React from "react";

function SimulaçãoInterativa() {
    return (
        <div className="relative top-[100px] ml-[1150px]">
            <h1 className="text-white text-[60px] text-center fonteBold w-[400px]">SIMULAÇÃO <br/> INTERATIVA</h1>
            <div className=" w-[400px] h-[100px] rounded-[27.50px] text-white bg-roxo bg-opacity-40 flex justify-center items-center">
            <input type="name" placeholder="Seu Nome" className="text-[30px] fonteBold w-[380px] pl-[10px] h-20 bg-roxo bg-opacity-20 rounded-[17.50px] "></input>
            </div>
            <button className="w-[400px] h-[100px] text-[30px] fonteBold bg-roxo rounded-[20px] text-white mt-[30px]"> SIMULAR</button>
        </div>
    )
}

export default SimulaçãoInterativa