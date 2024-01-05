import React, { useState, createContext, useEffect } from 'react';

const CentraldeDadosContext = createContext();

const CentraldeDadosProvider = ({ children }) => {
  const [dadosNome, setDadosNome] = useState("");
  const [dadosEmail, setDadosEmail] = useState("");
  const [assuntoEmail, setAssuntoEmail] = useState("");
  const [dadosPrimeirosNome, setDadosPrimeirosNome] = useState("");

  const nomes = dadosNome.split(" ");
  const doisPrimeirosNomes = nomes.slice(0, 2).join(" ");

  useEffect(() => {
    // Atualiza dadosPrimeirosNome sempre que dadosNome muda
    const novosNomes = dadosNome.split(" ");
    const dadosPrimeirosNome = novosNomes.slice(0, 2).join(" ");
    setDadosPrimeirosNome(dadosPrimeirosNome);
  }, [dadosNome]);

  const AtualizarDadosPrimeiroNome = (novosDadosPrimeirosNome) => {
    setDadosPrimeirosNome(novosDadosPrimeirosNome);
  };

  const AtualizarDadosEmail = (novosDadosEmail) => {
    setDadosEmail(novosDadosEmail);
  };

  const AtualizarDadosNome = (novosDadosNome) => {
    setDadosNome(novosDadosNome);
  };

  const AtualizarAssuntoEmail = (novosDadosAssuntoEmail) => {
    setAssuntoEmail(novosDadosAssuntoEmail);
  };

  console.log("Contexto - dadosPrimeirosNome:", dadosPrimeirosNome);

  return (
    <CentraldeDadosContext.Provider value={{
      dadosNome,
      AtualizarDadosNome,
      setDadosNome,
      dadosEmail,
      AtualizarDadosEmail,
      setDadosEmail,
      assuntoEmail,
      setAssuntoEmail,
      AtualizarAssuntoEmail,
      doisPrimeirosNomes,
      AtualizarDadosPrimeiroNome,
    }}>
      {children}
    </CentraldeDadosContext.Provider>
  );
};

export { CentraldeDadosContext, CentraldeDadosProvider };