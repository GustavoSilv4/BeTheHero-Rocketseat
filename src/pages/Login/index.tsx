import { SignIn } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import login from '../../assets/Login.png'

import { Container, FormLogon, ImageLogonContainer, Logo, Logon, LogonContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Login() {
  return (
    <Container>
      <LogonContainer>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Logon>
          <h1>Faça seu logon</h1>
          <FormLogon action="">
            <input type="text" placeholder="Sua ID" />
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
