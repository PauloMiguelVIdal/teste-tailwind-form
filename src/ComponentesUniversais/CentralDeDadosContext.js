import React, { useState, createContext, useEffect } from 'react';

const CentraldeDadosContext = createContext();

const CentraldeDadosProvider = ({ children }) => {
  const [dadosNome, setDadosNome] = useState("");
  const [dadosEmail, setDadosEmail] = useState("");
  const [dadosNumeroCartão, setDadosNumeroCartão] = useState("");
  const [dadosNumeroCVV, setDadosNumeroCVV] = useState("");
  const [assuntoEmail, setAssuntoEmail] = useState("");
  const [dadosDúvida, setDadosDúvida] = useState("");
  const [dadosPrimeirosNome, setDadosPrimeirosNome] = useState("");
  const [formularioSolicitado, setFormularioSolicitado] = useState(false);

  const nomes = dadosNome.split(" ");
  const doisPrimeirosNomes = nomes.slice(0, 2).join(" ");

  useEffect(() => {
    const novosNomes = dadosNome.split(" ");
    const dadosPrimeirosNome = novosNomes.slice(0, 2).join(" ").toUpperCase();
    setDadosPrimeirosNome(dadosPrimeirosNome);
  }, [dadosNome]);

  const ativarFormulario = () => {
    setFormularioSolicitado(true);
  };

  const desativarFormulario = () => {
    setFormularioSolicitado(false);
  };

  return (
    <CentraldeDadosContext.Provider value={{
      dadosNome,
      AtualizarDadosNome: setDadosNome,
      dadosEmail,
      AtualizarDadosEmail: setDadosEmail,
      assuntoEmail,
      AtualizarAssuntoEmail: setAssuntoEmail,
      doisPrimeirosNomes,
      dadosPrimeirosNome,
      AtualizarDadosPrimeiroNome: setDadosPrimeirosNome,
      AtualizarDadosDúvida: setDadosDúvida,
      dadosDúvida,
      AtualizarDadosNumerocartão: setDadosNumeroCartão,
      dadosNumeroCartão,
      AtualizarDadosNumeroCVV: setDadosNumeroCVV,
      dadosNumeroCVV,
      formularioSolicitado,
      ativarFormulario,
      desativarFormulario,
    }}>
      {children}
    </CentraldeDadosContext.Provider>
  );
};

export { CentraldeDadosContext, CentraldeDadosProvider };