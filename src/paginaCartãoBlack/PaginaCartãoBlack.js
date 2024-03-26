import React, { useState } from "react";
import { useEffect } from "react";
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
import { CentraldeDadosContext } from "../ComponentesUniversais/CentralDeDadosContext"



function PaginaCartãoBlack() {

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
    return (

        <div>
            <TelaInicialCartãoBlack scrollParaFormulárioBlack={scrollParaFormulárioBlack} />
            <PaginaBemVindoCartãoBlack />
            <PaginaBeneficiosCartãoBlack />
            <PaginaRequisitosCartãoBlack />
            <PaginaSolicitarCartãoBlack />
            <div id="formularioCartaoBlack">
                <PaginaFormularioCartãoBlack />
            </div>
            <PaginaSolicitarCartãoBlackResposta />
            <PaginaFormularioBlackResposta />
            <PaginaSemTaxaCartãoBlack />
            <PaginaFAQs />
            <PaginaFAQsResposta />
            <PaginaDepoimentosCartãoBlack />
            <PaginaSuporteBlack />
            <Footer className="w-full h-[1024px]" />
        </div>
    )
}

export default PaginaCartãoBlack;

// Em cada componente que você deseja controlar sua ativação/desativação, você pode usar o contexto ComponentesContext para acessar o estado e a função para alternar os componentes.
