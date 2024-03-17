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
    // Atualiza dadosPrimeirosNome sempre que dadosNome muda
    const novosNomes = dadosNome.split(" ");
    const dadosPrimeirosNome = novosNomes.slice(0, 2).join(" ").toUpperCase();
    setDadosPrimeirosNome(dadosPrimeirosNome);
  }, [dadosNome]);


  const ativarFormulario = () => {
    setFormularioSolicitado(true);
  };

  const AtualizarDadosDúvida = (novosDadosDúvida) => {
    setDadosDúvida(novosDadosDúvida);
  };

  const AtualizarDadosPrimeiroNome = (novosDadosPrimeirosNome) => {
    setDadosPrimeirosNome(novosDadosPrimeirosNome);
  };

  const AtualizarDadosEmail = (novosDadosEmail) => {
    setDadosEmail(novosDadosEmail);
  };

  const AtualizarDadosNome = (novosDadosNome) => {
    setDadosNome(novosDadosNome);
  };
  
  const AtualizarDadosNumerocartão = (novosDadosNumeroCartão) => {
    setDadosNumeroCartão(novosDadosNumeroCartão);
  };
  ;
  const AtualizarDadosNumeroCVV = (novosDadosNumeroCVV) => {
    setDadosNumeroCVV(novosDadosNumeroCVV);
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
      dadosPrimeirosNome,
      AtualizarDadosPrimeiroNome,
      AtualizarDadosDúvida,
      dadosDúvida,
      AtualizarDadosNumerocartão,
      dadosNumeroCartão,
      AtualizarDadosNumeroCVV,
      dadosNumeroCVV,
      formularioSolicitado, ativarFormulario  
    }}>
      {children}
    </CentraldeDadosContext.Provider>
  );
};

export { CentraldeDadosContext, CentraldeDadosProvider };