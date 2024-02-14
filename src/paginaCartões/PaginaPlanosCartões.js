import React from "react";
import { Link } from "react-router-dom";
export default function PaginaPlanosCartões(scrollParaFormulárioBlack) {
    return (
        <div>
            <div className="w-full h-[1024px] bg-white ">
                <div className="relative bottom-[115px]">
                    <div className="bg-gradient-to-b from-roxoForte to-black to-90%  h-[924px]  w-[49%] relative top-[115px] left-[0.5%] rounded-b-[40px] box2">
                        <h4 className="text-laranja text-center fonteBold text-[40px] pt-[60px]">PLANO PREMIUM</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Cashback 1%</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Vantagens exclusivas</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Suporte Prioritário</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Benefícios Exclusivos</h4>
                        <div className="flex items-center justify-center pt-[200px]">
                        <Link to="/cartãoBlack/solicitar" >
                            <button className="w-[600px] h-[100px] bg-laranja rounded-[20px] box5" onClick={scrollParaFormulárioBlack}>
                                <h4 className="text-white text-center fonteBold text-[40px]">PEDIR CARTÃO BLACK</h4>
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-roxo to-roxoForte to-90% h-[924px] w-[49%] relative bottom-[810px] left-[50.5%] rounded-b-[40px] box2">
                        <h4 className="text-laranja text-center fonteBold text-[40px] pt-[60px]">PLANO ACESSÍVEL</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Cashback 0,5%</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Vantagens simples</h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Suporte </h4>
                        <h4 className="text-white text-center fonteLight text-[40px] pt-[60px]">Benefícios Especiais</h4>
                        <div className="flex items-center justify-center pt-[200px] ">
                            <button className="w-[600px] h-[100px] bg-laranja rounded-[20px] box5">
                                <h4 className="text-white text-center fonteBold text-[40px]">PEDIR CARTÃO STANDART</h4>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}