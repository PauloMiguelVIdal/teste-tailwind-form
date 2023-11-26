import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import { useState } from 'react';
import PaginaInicial from '../src/paginaInicial/PaginaInicial';
import PaginaCartãoBlack from './paginaCartãoBlack/PaginaCartãoBlack';
import PaginaCartãoStandart from './paginaCartãoStandart/PaginaCartãoStandart';
import PaginaTodosOsBenefíciosCartãoBlack from './paginaBenefíciosCartãoBlack/PaginaBenefíciosCartãoBlack';
import PaginaTodosOsBenefíciosCartãoStandart from './paginaBenefíciosCartãoStandart/PaginaBenefíciosCartãoStandart';
// import PaginaCriptomoeda  from "./paginaCriptomoeda/PaginaCriptomoeda"
import PaginaBemVindoCriptomoeda from './paginaCriptomoeda/PaginaBemVindoCriptomoeda/PaginaBemVindoCriptomoeda';
import TelaInicialCriptomoeda from './paginaCriptomoeda/TelaInicialCriptomoeda/TelaInicialCriptomoeda';
import PaginaBenefíciosCriptomoeda from './paginaCriptomoeda/PaginaBenefíciosCriptomoeda/PaginaBenefíciosCriptomoeda';
import PaginaInvistaAgora from "./paginaCriptomoeda/PaginaInvistaAgora/PaginaInvistaAgora"
import Footer from './ComponentesUniversais/Cartões/Footer';
import PaginaCultura from './paginaCultura/PaginaCultura';
function App() {

  return (
    <div>
      {/* <PaginaInicial className="w-screen h-[1024] bg-roxo" ></PaginaInicial >
      <PaginaCartãoBlack className="w-[1440px] h-[1024px]"></PaginaCartãoBlack>
      <PaginaCartãoStandart className="w-[1440px] h-[1024px]"></PaginaCartãoStandart>
    <PaginaTodosOsBenefíciosCartãoBlack></PaginaTodosOsBenefíciosCartãoBlack>
    <PaginaTodosOsBenefíciosCartãoStandart></PaginaTodosOsBenefíciosCartãoStandart> */}
    {/* <PaginaCriptomoeda></PaginaCriptomoeda> */}
{/* <TelaInicialCriptomoeda className="w-full h-[1024px]"></TelaInicialCriptomoeda>
<PaginaBemVindoCriptomoeda className="w-full h-[1024px]"></PaginaBemVindoCriptomoeda>
<PaginaBenefíciosCriptomoeda className="w-full h-[1024px]"></PaginaBenefíciosCriptomoeda>
    <PaginaInvistaAgora className="w-full h-[1024px]"></PaginaInvistaAgora> */}
    {/* <Footer className="w-full h-[1024px]"></Footer> */}
<PaginaCultura></PaginaCultura>
    </div >
  );
}

export default App;
