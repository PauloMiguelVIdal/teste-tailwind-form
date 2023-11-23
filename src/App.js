import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import { useState } from 'react';
import PaginaInicial from '../src/paginaInicial/PaginaInicial';
import PaginaCartãoBlack from './paginaCartãoBlack/PaginaCartãoBlack';
import PaginaCartãoStandart from './paginaCartãoStandart/PaginaCartãoStandart';
function App() {
  const [informações, Setinformações] = useState([])

  function onAddInformações(nome, email) {
    let info = new Informações(nome, email)
    Setinformações([...informações, info])
  }

  return (
    <div>
      <PaginaInicial className="w-screen h-[1024] bg-roxo" ></PaginaInicial >
      <PaginaCartãoBlack className="w-[1440px] h-[1024px]"></PaginaCartãoBlack>
      <PaginaCartãoStandart className="w-[1440px] h-[1024px]"></PaginaCartãoStandart>
    </div >
  );
}

export default App;
