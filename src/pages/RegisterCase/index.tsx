import { ArrowLeft } from 'phosphor-react'
import { Container, FormContainer, Frame, InfoContainer, Logo } from './styles'

import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CaseContext } from '../../contexts/CaseContext'

export function RegisterCase() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [value, setValue] = useState(0)

  const { registerNewCase } = useContext(CaseContext)

  function handleCreateNewCase(e) {
    e.preventDefault()

    registerNewCase({ title, description: desc, value })
  }

  return (
    <Container>
      <Frame>
        <InfoContainer>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <h1>Cadastro novo caso</h1>
          <span>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</span>
          <NavLink to={'/home'}>
            <ArrowLeft size={24} weight="bold" /> Voltar para home
          </NavLink>
        </InfoContainer>
        <FormContainer onSubmit={handleCreateNewCase}>
          <input type="text" placeholder="Título do caso" onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Descreva o caso" onChange={(e) => setDesc(e.target.value)} />
          <input type="number" placeholder="Valor em reais" onChange={(e) => setValue(Number(e.target.value))} />
          <button type="submit">Cadastrar</button>
        </FormContainer>
      </Frame>
    </Container>
  )
}
