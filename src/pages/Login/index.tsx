import { SignIn } from 'phosphor-react'

import logo from '../../assets/Logo.svg'
import login from '../../assets/Login.png'

import { Container, FormLogon, ImageLogonContainer, Logo, Logon, LogonContainer } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useForm } from 'react-hook-form'

export function Login() {
  const { findUserLogin } = useContext(UserContext)

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      id: '',
    },
  })

  const navigate = useNavigate()

  const inputIdValue = watch('id')

  function handleLogin() {
    if (inputIdValue === '') {
      return
    }

    const result = findUserLogin(Number(inputIdValue))

    if (result === true) {
      reset()
      navigate('/home')
    }

    console.log(result)
  }

  return (
    <Container>
      <LogonContainer>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <Logon>
          <h1>Faça seu logon</h1>
          <FormLogon onSubmit={handleSubmit(handleLogin)}>
            <input type="number" placeholder="Sua ID" {...register('id')} />
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
