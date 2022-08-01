import { ArrowLeft } from 'phosphor-react'
import { Container, FormContainer, Frame, InfoContainer, Logo } from './styles'

import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Register() {
  const { registerNewUser } = useContext(UserContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleRegisterNewUser(e) {
    e.preventDefault()

    const id = registerNewUser(name, email)
    console.log(id)
  }

  return (
    <Container>
      <Frame>
        <InfoContainer>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <h1>Cadastro</h1>
          <span>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</span>
          <NavLink to={'/'}>
            <ArrowLeft size={24} weight="bold" /> Voltar para o logon
          </NavLink>
        </InfoContainer>
        <FormContainer action="" onSubmit={handleRegisterNewUser}>
          <input type="text" placeholder="Nome da ONG" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="WhatsApp" />
          <div>
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
          <button type="submit">Cadastrar</button>
        </FormContainer>
      </Frame>
    </Container>
  )
}
