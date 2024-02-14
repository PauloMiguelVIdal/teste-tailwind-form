import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import React from 'react';
import { Component, useEffect } from 'react';
import PaginaInicial from '../src/paginaInicial/PaginaInicial';
import PaginaCartãoBlack from './paginaCartãoBlack/PaginaCartãoBlack';
import PaginaCartãoStandart from './paginaCartãoStandart/PaginaCartãoStandart';
import PaginaTodosOsBenefíciosCartãoBlack from './paginaBenefíciosCartãoBlack/PaginaBenefíciosCartãoBlack';
import PaginaTodosOsBenefíciosCartãoStandart from './paginaBenefíciosCartãoStandart/PaginaBenefíciosCartãoStandart';
import PaginaCriptomoeda from "./paginaCriptomoeda/PaginaCriptomoeda"
import PaginaCultura from './paginaCultura/PaginaCultura';
import TelaInicialCartão from './paginaCartão/TelaInicialCartão/TelaInicialCartão'; 
import { CentraldeDadosProvider } from './ComponentesUniversais/CentralDeDadosContext';
import {Route, BrowserRouter as Router} from "react-router-dom"
import { Routes } from 'react-router-dom';
import PaginaInicialApp from './paginaInicial/paginaInicialApp/PaginaInicialApp';
import PaginaBenefíciosCartãoBlack from "./paginaBenefíciosCartãoBlack/PaginaBenefíciosCartãoBlack"
import PaginaBeneficiosCartãoStandart from './paginaCartãoStandart/PaginaBeneficiosCartãoStandart/PaginaBeneficiosCartãoStandart';
import PaginaCartões from './paginaCartões/paginaCartões';
import PaginaFormularioCartãoBlack from './paginaCartãoBlack/PaginaFormularioCartãoBlack/PaginaFormularioCartãoBlack';


function App() {

  useEffect(() => {
    // Rola para o formulário quando o componente é montado
    const formulario = document.getElementById("formularioCartaoBlack");
    if (formulario) {
      window.scrollTo({
        behavior: 'smooth',
        top: formulario.offsetTop
      });
    }
  }, []); // Esta função será executada apenas uma vez após a montagem do componente

  

  return (
    <Router>
    <div>
      <CentraldeDadosProvider>
        {/* sistema de rotas */}
      <Routes>
        <Route path='/' element={<PaginaInicial className="w-screen h-[1024] bg-roxo" />}/>
        <Route path="/app" element={<PaginaInicialApp className="w-[1440px] h-[1024px]"></PaginaInicialApp>}/>
        <Route path="/cartãoStandart" element={<PaginaCartãoStandart/>}/>
        <Route path="/cartãoBlack" element={<PaginaCartãoBlack/>}/>
        
        {/* <Route path="/cartãoBlack/solicitar" element={<PaginaFormularioCartãoBlack/>}/> */}
        <Route path="/cartãoBlack/solicitar" element={<PaginaFormularioCartãoBlack />} />
        <Route path="/benefícios" element={<PaginaBenefíciosCartãoBlack/>}/>
        <Route path="/benefíciosCartãoBlack" element={<PaginaBenefíciosCartãoBlack/>}/>
        <Route path="/benefíciosCartãoStandart" element={<PaginaBeneficiosCartãoStandart/>}/>
        <Route path="/cartões" element={<PaginaCartões/>}/>
       

        

      <Route path='/cartaoBlack' element={<PaginaCartãoBlack className="w-[1440px] h-[1024px]"></PaginaCartãoBlack>}/>
      <Route path='/cartaoStandart' element={<PaginaCartãoStandart className="w-[1440px] h-[1024px]"/>}/>
      <Route path='/benefíciosCartãoBlack' element={<PaginaTodosOsBenefíciosCartãoBlack className="w-[1440px] h-[1024px]"/>}/>
      <Route path='/benefíciosCartãoStandart' element={<PaginaTodosOsBenefíciosCartãoStandart className="w-[1440px] h-[1024px]"/>}/>
      <Route path='/criptomoeda' element={<PaginaCriptomoeda className="w-[1440px] h-[1024px]"/>}/>
      <Route path='/cultura' element={<PaginaCultura/>}/>
      <Route path='/telaInicial' element={<TelaInicialCartão/>}/>
      </Routes>
      </CentraldeDadosProvider>
    </div >
</Router>
  )
  ;
}

export default App;
