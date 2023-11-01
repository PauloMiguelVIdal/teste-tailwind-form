import logo from './logo.svg';
import './App.css';
import Informações from './informações';
import { useState } from 'react';
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
    <Pagina1 onAddInformações={onAddInformações}></Pagina1>
    <Pagina2></Pagina2>
    </div>
  );
}

export default App;
