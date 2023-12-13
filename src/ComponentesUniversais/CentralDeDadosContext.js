
import { useState, createContext} from 'react';

const CentraldeDadosContext = createContext()

const CentraldeDadosProvider = ({ children }) => {
  const [dadosNome, setDadosNome] = useState("")
  const [dadosEmail, setDadosEmail] = useState("")
  const [assuntoEmail, setAssuntoEmail] = useState("")

  const AtualizarDadosEmail = (novosDadosEmail) => {
    setDadosEmail(novosDadosEmail)
  }

  const AtualizarDadosNome = (novosDadosNome) => {
    setDadosNome(novosDadosNome)
  }

  const AtualizarAssuntoEmail = (novosDadosAssuntoEmail) => {
    setAssuntoEmail(novosDadosAssuntoEmail)
  }

  return(
    <CentraldeDadosContext.Provider value={{dadosNome,AtualizarDadosNome,setDadosNome,dadosEmail, AtualizarDadosEmail,setDadosEmail,assuntoEmail,setAssuntoEmail,AtualizarAssuntoEmail }}>
      {children}
    </CentraldeDadosContext.Provider>
  )
}

export {CentraldeDadosContext, CentraldeDadosProvider }

