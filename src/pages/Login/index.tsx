import { SignIn } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import login from '../../assets/Login.png'

import { Container, FormLogon, ImageLogonContainer, Logo, Logon, LogonContainer } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Login() {
  const { findUserLogin } = useContext(UserContext)

  const navigate = useNavigate()

  const [id, setId] = useState<number>(0)

  function handleLogin(e) {
    e.preventDefault()

    if (id === 0) {
      return
    }

    const result = findUserLogin(id)

    if (result === 'ID logado com sucesso') {
      // ** OBS: Mudar para verificacao do conteudo do objeto activeUser **
      navigate('/home')
    }
  }

  return (
    <Container>
      <LogonContainer>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Logon>
          <h1>Faça seu logon</h1>
          <FormLogon action="" onSubmit={handleLogin}>
            <input type="number" placeholder="Sua ID" onChange={(e) => setId(Number(e.target.value))} />
            <button type="submit">Entrar</button>
          </FormLogon>
          <NavLink to={'/register'}>
            <SignIn size={25} /> Não tenho cadastro
          </NavLink>
        </Logon>
      </LogonContainer>
      <ImageLogonContainer>
        <img src={login} alt="" />
      </ImageLogonContainer>
    </Container>
  )
}
