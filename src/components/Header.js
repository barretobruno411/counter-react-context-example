import React, { useContext }from 'react'
import { CreatedContext } from '../ContextProvider'
import "./Header.css"

const Header = () => {

  const [conter] = useContext(CreatedContext)// passamos o createdContext como inicializador do estado

  return (
    <header className='header'>
        <h1>Contador</h1>
        {/* substituimos o valor da string simples pelo do estado conter, que é inicializado com o context do provider */}
        <h2>{conter}</h2>
    </header>
  )
}

export default Header