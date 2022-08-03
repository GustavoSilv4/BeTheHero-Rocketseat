import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import { SignIn } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import login from '../../assets/Login.png'

import { Container, FormLogon, ImageLogonContainer, Logo, Logon, LogonContainer } from './styles'

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
      toast.error('Preencha o campo com sua ID de login!', {
        duration: 5000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      return
    }

    const result = findUserLogin(Number(inputIdValue))

    if (result === true) {
      reset()
      navigate('/home')
      return
    }

    toast.error('O ID Fornecido não está cadastrado', {
      duration: 5000,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
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
      <Toaster />
    </Container>
  )
}
