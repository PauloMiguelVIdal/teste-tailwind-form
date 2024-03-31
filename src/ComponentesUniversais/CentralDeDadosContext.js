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
  const [estadoFormulário, setEstadoFormulário] = useState(true);
  const [versoCartão, setVersoCartão] = useState(false);

  const nomes = dadosNome.split(" ");
  const doisPrimeirosNomes = nomes.slice(0, 2).join(" ");

  useEffect(() => {
    const novosNomes = dadosNome.split(" ");
    const dadosPrimeirosNome = novosNomes.slice(0, 2).join(" ").toUpperCase();
    setDadosPrimeirosNome(dadosPrimeirosNome);
  }, [dadosNome]);
console.log(estadoFormulário)

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
      AtualizarEstadoFormulário: setEstadoFormulário,
      estadoFormulário,
      AtualizarVersoCartão: setVersoCartão,
      versoCartão
    }}>
      {children}
    </CentraldeDadosContext.Provider>
  );
};

export { CentraldeDadosContext, CentraldeDadosProvider };