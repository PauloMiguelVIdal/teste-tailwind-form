import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import { useState } from 'react';
import PaginaInicial from './PaginaInicial';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';

function App() {
  const [informações, Setinformações] = useState([])

  function onAddInformações(nome, email) {
    let info = new Informações(nome, email)
    Setinformações([...informações, info])
  }

  return (
    <div>
    <PaginaInicial className="w-[1440] h-[1024] bg-roxo"></PaginaInicial>
    <Pagina1 onAddInformações={onAddInformações}></Pagina1>
    <Pagina2 className="w-[1440] h-[1024] bg-white" ></Pagina2>
    </div>
  );
}

export default App;
