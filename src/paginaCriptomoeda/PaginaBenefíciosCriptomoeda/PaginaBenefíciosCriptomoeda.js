import React from "react";
import escudo from "./icon/escudo.png"
import pagamento from "./icon/pagamento.png"
import declaração from "./icon/declaracao.png"
import preçoBaixo from "./icon/preco-baixo.png"
import globoTerrestre from "./icon/globo-terrestre.png"
import repartir from "./icon/repartir.png"
import liberdade from "./icon/liberdade.png"
import tecnologia from "./icon/tenologia.png"
import potencialDeCrescimento from "./icon/potencial de crescimnento.png"

function PaginaBenefíciosCriptomoeda() {
    return (
        <div>
            <div className="flex justify-center flex-col items-center mt-[116px] mb-[124px]">
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={escudo} alt="escudo"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            A Obcoin prioriza a segurança, protegendo suas
                            transações com tecnologia de criptografia avançada.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={pagamento} alt="pagamento"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            Com a Obcoin, suas transações são concluídas em questão de
                            segundos, tornando os pagamentos rápidos e eficazes.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={declaração} alt="declaração"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            Todas as transações Obcoin são registradas de forma
                            transparente e imutável em nosso blockchain público.

                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={preçoBaixo} alt="preçoBaixo"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            As taxas de transação da Obcoin são notavelmente baixas,
                            economizando dinheiro em suas transações.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={globoTerrestre} alt="globoTerrestre"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            A Obcoin está disponível em todo o mundo, promovendo a
                            inclusão financeira global.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={repartir} alt="repartir"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            A Obcoin é altamente divisível, permitindo transações de
                            qualquer valor.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={liberdade} alt="liberdade"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            A Obcoin oferece independência financeira, permitindo que
                            você tenha controle direto sobre seus ativos.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={tecnologia} alt="tecnologia"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo">
                            Estamos comprometidos em manter a Obcoin na vanguarda da
                            inovação tecnológica.
                        </h4>
                    </div>
                </div>
                <div className="w-[1000px] h-[80px] mb-[20px] flex">
                    <div className="min-w-[80px] min-h-[80px] rounded-[20px] border-laranja border-[2px] bg-roxo flex justify-center items-center">
                        <img className="w-[50px] h-[50px]" src={potencialDeCrescimento} alt="potencialDeCrescimento"></img>
                    </div>
                    <div className="m-auto ml-[40px]">
                        <h4 className="text-[25px] text-roxo light">
                            A Obcoin tem potencial para valorização, tornando-a uma opção
                            atraente para investidores.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaBenefíciosCriptomoeda