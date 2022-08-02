import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NavLink } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowLeft } from 'phosphor-react'
import logo from '../../assets/Logo.svg'

import { Container, FormContainer, Frame, InfoContainer, Logo } from './styles'

const registerUserValidationScheme = zod.object({
  name: zod.string().min(1, 'Informe o nome da ONG'),
  email: zod.string().email('Email invalido!'),
  whatsapp: zod.string().regex(/\d\d\9\d\d\d\d\d\d\d\d/, 'Whatsapp invalido! (Ex: DD912345678)'), // (/\(d\d\)9\d\d\d\d\d\d\d\d/),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o UF').max(2),
})

type RegisterUserData = zod.infer<typeof registerUserValidationScheme>

export function Register() {
  const { registerNewUser } = useContext(UserContext)

  const toast = useToast()

  const { register, handleSubmit, reset } = useForm<RegisterUserData>({
    resolver: zodResolver(registerUserValidationScheme),
    defaultValues: {
      name: '',
      email: '',
      city: '',
      uf: '',
      whatsapp: '',
    },
  })

  function handleRegisterNewUser(data: RegisterUserData) {
    const id = registerNewUser(data.name, data.email)
    reset()
    toast({
      title: 'ONG Registrada com sucesso',
      description: `Aqui está o ID da sua ONG para login: ${id}`,
      status: 'success',
      duration: 20000,
      isClosable: true,
    })
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
        <FormContainer action="" onSubmit={handleSubmit(handleRegisterNewUser)}>
          <input type="text" placeholder="Nome da ONG" {...register('name')} />
          <input type="text" placeholder="E-mail" {...register('email')} />
          <input type="tel" placeholder="WhatsApp" {...register('whatsapp')} />
          <div>
            <input type="text" placeholder="Cidade" {...register('city')} />
            <input type="text" placeholder="UF" {...register('uf')} />
          </div>
          <button type="submit">Cadastrar</button>
        </FormContainer>
      </Frame>
    </Container>
  )
}
