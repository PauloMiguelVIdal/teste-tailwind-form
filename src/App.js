import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import { useState } from 'react';
import PaginaInicial from './PaginaInicial';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';
import Pagina3 from './pagina3';
import Pagina4 from './pagina4';
import Pagina5 from './pagina5';
function App() {
  const [informações, Setinformações] = useState([])

  function onAddInformações(nome, email) {
    let info = new Informações(nome, email)
    Setinformações([...informações, info])
  }

  return (
    <div className=''>
    <PaginaInicial className="w-[1440] h-[1024] bg-roxo"></PaginaInicial>
    <Pagina3 className="w-[1440px] h-[1024px]"></Pagina3>
    <Pagina2 className="w-[1440px] h-[1024px]"></Pagina2>
    <Pagina4 className="w-[1440px] h-[1024px]"></Pagina4>
  <Pagina5 className="w-[1440px] h-[1024px]"></Pagina5>
  <Pagina1 onAddInformações={onAddInformações}></Pagina1>
    </div>
  );
}

export default App;
