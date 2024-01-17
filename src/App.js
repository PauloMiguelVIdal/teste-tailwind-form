import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import React from 'react';
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




function App() {

  return (
    <Router>
    <div>
      <CentraldeDadosProvider>
      <Routes>
        <Route path='/' element={<PaginaInicial className="w-screen h-[1024] bg-roxo" />}/>
        <Route path="/app" element={<PaginaInicialApp className="w-[1440px] h-[1024px]"></PaginaInicialApp>}/>
        <Route path="/cartãoStandart" element={<PaginaCartãoStandart/>}/>
        

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
