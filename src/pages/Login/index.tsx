import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'

import { SignIn } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import login from '../../assets/Login.png'

import { Container, FormLogon, ImageLogonContainer, Logo, Logon, LogonContainer } from './styles'

export function Login() {
  const { findUserLogin } = useContext(UserContext)

  const toast = useToast()

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      id: '',
    },
  })

  const navigate = useNavigate()

  const inputIdValue = watch('id')

  function handleLogin() {
    if (inputIdValue === '') {
      toast({
        title: 'Campo não preenchido!',
        description: 'Preencha o campo com sua ID de login',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
      return
    }

    const result = findUserLogin(Number(inputIdValue))

    if (result === true) {
      reset()
      navigate('/home')
      return
    }

    toast({
      title: 'ID Invalido!',
      description: 'O ID Fornecido não está cadastrado',
      status: 'error',
      duration: 9000,
      isClosable: true,
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
    </Container>
  )
}
