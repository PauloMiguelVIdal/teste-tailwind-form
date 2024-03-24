import React, { createContext, useState, useContext } from "react";
import { useEffect} from "react";
import TelaInicialCartãoBlack from "../paginaCartãoBlack/telaInicialCartãoBlack/TelaInicialCartãoBlack"
import PaginaBemVindoCartãoBlack from "./PaginaBemVindoCartãoBlack/PaginaBemVindoCartãoBlack"
import PaginaBeneficiosCartãoBlack from "./PaginaBeneficiosCartãoBlack/PaginaBeneficiosCartãoBlack"
import PaginaRequisitosCartãoBlack from "./PaginaRequisitosCartãoBlack/PaginaRequisitosCartãoBlack"
import PaginaSolicitarCartãoBlack from "./PaginaSolicitarCartãoBlack/PaginaSolicitarCartãoBlack"
import PaginaSolicitarCartãoBlackResposta from "./PaginaSolicitarCartãoBlackResposta/PaginaSolicitarCartãoBlackResposta";
import PaginaSemTaxaCartãoBlack from "./PaginaSemTaxaCartãoBlack/PaginaSemTaxaCartãoBlack"
import PaginaFAQs from "./PaginaFAQs/PaginaFAQs"
import PaginaFAQsResposta from "./PaginaFAQsResposta/PaginaFAQsResposta"
import PaginaDepoimentosCartãoBlack from "./PaginaDepoimentosCartãoBlack/PaginaDepoimentosCartãoBlack"
import PaginaSuporteBlack from "./PaginaSuporteBlack/PaginaSuporteBlack"
import PaginaFormularioCartãoBlack from "./PaginaFormularioCartãoBlack/PaginaFormularioCartãoBlack";
import PaginaFormularioBlackResposta from "./PaginaFormularioBlackResposta/PaginaFormularioBlackResposta";
import Footer from "../ComponentesUniversais/Footer";

// Criar o contexto para gerenciar o estado de ativação e desativação dos componentes
const ComponentesContext = createContext();

function PaginaCartãoBlack() {
    const [componentesAtivos, setComponentesAtivos] = useState({
        solicitarCartaoBlack: true,
        formularioCartaoBlack: true,
        solicitarCartaoBlackResposta: false,
        formularioBlackResposta: false
    });

    const toggleComponente = (componente) => {
        console.log("Toggle componente:", componente);

        setComponentesAtivos(prevState => ({
            ...prevState,
            [componente]: !prevState[componente]
        }));
    };

    // Scroll para o formulário do Cartão Black ao montar o componente
    useEffect(() => {
        scrollParaFormulárioBlack();
    }, []);

    const scrollParaFormulárioBlack = () => {
        const formularioBlack = document.getElementById("formularioCartaoBlack");
        if (formularioBlack) {
            window.scrollTo({
                behavior: 'smooth',
                top: formularioBlack.offsetTop
            });
        }
    };
    console.log("Estado Atual:", componentesAtivos); // Adicione esta linha para depurar o estado atual
    return (
        <ComponentesContext.Provider value={{ componentesAtivos, toggleComponente }}>
            <div>
                <TelaInicialCartãoBlack scrollParaFormulárioBlack={scrollParaFormulárioBlack} />
                <PaginaBemVindoCartãoBlack />
                <PaginaBeneficiosCartãoBlack />
                <PaginaRequisitosCartãoBlack />
                {componentesAtivos.solicitarCartaoBlack &&
                    <>
                        <PaginaSolicitarCartãoBlack />
                        <div id="formularioCartaoBlack">
                            <PaginaFormularioCartãoBlack toggleComponente={toggleComponente}/>
                        </div>
                    </>
                }
                {componentesAtivos.solicitarCartaoBlackResposta && <PaginaSolicitarCartãoBlackResposta />}
                {componentesAtivos.formularioBlackResposta && <PaginaFormularioBlackResposta />}
                <PaginaSemTaxaCartãoBlack />
                <PaginaFAQs />
                <PaginaFAQsResposta />
                <PaginaDepoimentosCartãoBlack />
                <PaginaSuporteBlack />
                <Footer className="w-full h-[1024px]" />
            </div>
        </ComponentesContext.Provider>
    )
}

export default PaginaCartãoBlack;

// Em cada componente que você deseja controlar sua ativação/desativação, você pode usar o contexto ComponentesContext para acessar o estado e a função para alternar os componentes.
