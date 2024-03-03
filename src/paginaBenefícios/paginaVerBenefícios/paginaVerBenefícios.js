import React from "react";
import { Link } from "react-router-dom";
import CartãoBlack from "../../ComponentesUniversais/Cartões/CartãoBlack/CartãoBlack";
import CartãoStandart from "../../ComponentesUniversais/Cartões/CartãoStandart/CartãoStandart";
export default function PaginaVerBenefícios() {
    return (
        <div>
            <div className="w-full h-[1024px] bg-white">
                <div className="h-[34rem] w-full bg-transparent">
                    {/* <h2 className="text-roxo text-[60px] fonteBold text-center relative bottom-[20px]">BENEFÍCIOS EXCLUSIVOS</h2> */}
                    <div className=" flex justify-around items-center relative z-10 relative top-[110px]">
                        <CartãoBlack />
                        <CartãoStandart />
                    </div>
                    {/* <CartõesCurvosSeparados/> */}
                </div>
                <div className="relative bottom-[115px] relative bottom-[300px]">
                    <div className="bg-gradient-to-b from-roxo to-roxoForte h-[22.5rem]  w-[49%] relative top-[22.5rem] left-[0.5%] rounded-[40px] flex justify-center">
                        <button className="w-[600px] h-[100px] bg-laranja rounded-[20px] box5 relative top-[220px] z-20">
                            <Link to="/benefíciosCartãoBlack" >
                                <h4 className="text-white text-center fonteBold text-[40px]">BENEFÍCOS BLACK</h4>
                            </Link>
                        </button>
                    </div>
                    <div className="bg-gradient-to-b from-laranja to-roxo h-[22.5rem] w-[49%] relative bottom-[0px] left-[50.5%] rounded-[40px] flex justify-center">
                        <button className="w-[600px] h-[100px] bg-laranja rounded-[20px] box5 relative top-[220px] z-20">
                            <Link to="/benefíciosCartãoStandart" >
                                <h4 className="text-white text-center fonteBold text-[40px]">BENEFÍCOS STANDART</h4>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="bg-gradient-radial from-roxoForte to-marinho h-[22.5rem] w-full relative top-[120px]">
                </div>
            </div>
        </div>
    )
}