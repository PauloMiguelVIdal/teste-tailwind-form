import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import { useState } from 'react';
import PaginaInicial from '../src/paginaInicial/PaginaInicial';
import PaginaCartãoBlack from './paginaCartãoBlack/PaginaCartãoBlack';
import PaginaCartãoStandart from './paginaCartãoStandart/PaginaCartãoStandart';
import PaginaTodosOsBenefíciosCartãoBlack from './paginaBenefíciosCartãoBlack/PaginaBenefíciosCartãoBlack';
import PaginaTodosOsBenefíciosCartãoStandart from './paginaBenefíciosCartãoStandart/PaginaBenefíciosCartãoStandart';
import PaginaCriptomoeda from "./paginaCriptomoeda/PaginaCriptomoeda"
import PaginaCultura from './paginaCultura/PaginaCultura';
import TelaInicialCartão from './paginaCartão/TelaInicialCartão/TelaInicialCartão'; 
function App() {

  return (
    <div>
      {/* <PaginaInicial className="w-screen h-[1024] bg-roxo" ></PaginaInicial > */}
      {/* <PaginaCartãoBlack className="w-[1440px] h-[1024px]"></PaginaCartãoBlack> */}
      <PaginaCartãoStandart className="w-[1440px] h-[1024px]"></PaginaCartãoStandart>
      {/* <PaginaTodosOsBenefíciosCartãoBlack className="w-[1440px] h-[1024px]"></PaginaTodosOsBenefíciosCartãoBlack>
      <PaginaTodosOsBenefíciosCartãoStandart className="w-[1440px] h-[1024px]"></PaginaTodosOsBenefíciosCartãoStandart>
      <PaginaCriptomoeda className="w-[1440px] h-[1024px]"></PaginaCriptomoeda>
      <PaginaCultura></PaginaCultura>
      <TelaInicialCartão></TelaInicialCartão>  */}
    </div >
  );
}

export default App;
