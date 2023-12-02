import React from "react";

function PaginaFAQsResposta() {
    return (
        <div className="w-full h-[1024px]">
            <h1 className="text-center text-[60px] fonteBold text-roxo mt-[115px] mb-[100px]">FAQS</h1>
            <h2 className="text-[40px] text-roxo text-center fonteBold mb-[50px]"> Dúvida enviada com sucesso</h2>
            <h4 className="text-center text-[40px] text-roxo fonteLight opacity-70">Agradecemos por entrar em contato <br /> conosco. Sua dúvida foi recebida e será<br /> cuidadosamente avaliada. Estamos<br /> empenhados em fornecer uma resposta<br /> abrangente em até 3 dias úteis.<br /> Entraremos em contato assim que<br /> tivermos mais informações para<br /> compartilhar. Agradecemos sua paciência.</h4>
            <div>
                <button className="linkTexto mt-[115px]  ml-[200px]">
                    <a href="teste" className="">
                        <h4 className="text-[40px] text-laranja fonteBold">Enviar outra dúvida</h4>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default PaginaFAQsResposta