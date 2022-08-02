import { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CaseContext } from '../../contexts/CaseContext'
import { UserContext } from '../../contexts/UserContext'
import { useToast } from '@chakra-ui/react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import logo from '../../assets/Logo.svg'
import { ArrowLeft } from 'phosphor-react'

import { Container, FormContainer, Frame, InfoContainer, Logo } from './styles'

const registerCaseValidationScheme = zod.object({
  title: zod.string().min(1, 'Digite um titulo para o caso!'),
  description: zod.string().min(1, 'Digite uma descrição para o caso!'),
  value: zod.string().min(1, 'Digite um valor para o caso!'),
})

type RegisterCaseData = zod.infer<typeof registerCaseValidationScheme>

export function RegisterCase() {
  const { register, handleSubmit } = useForm<RegisterCaseData>({
    resolver: zodResolver(registerCaseValidationScheme),
    defaultValues: {
      description: '',
      title: '',
      value: '',
    },
  })

  const { registerNewCase } = useContext(CaseContext)
  const { activeUser } = useContext(UserContext)

  const toast = useToast()

  const navigate = useNavigate()

  useEffect(() => {
    if (activeUser.length <= 0) {
      navigate('/')
    }
  }, [navigate, activeUser])

  function handleCreateNewCase(data: RegisterCaseData) {
    registerNewCase({
      id: new Date().getTime(),
      title: data.title,
      description: data.description,
      value: Number(data.value),
    })

    toast({
      title: 'Caso cadastrado com sucesso!',
      status: 'success',
      duration: 5000,
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
          <h1>Cadastro novo caso</h1>
          <span>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</span>
          <NavLink to={'/home'}>
            <ArrowLeft size={24} weight="bold" /> Voltar para home
          </NavLink>
        </InfoContainer>
        <FormContainer onSubmit={handleSubmit(handleCreateNewCase)}>
          <input type="text" placeholder="Título do caso" {...register('title')} />
          <textarea placeholder="Descreva o caso" {...register('description')} />
          <input type="number" placeholder="Valor em reais" {...register('value')} />
          <button type="submit">Cadastrar</button>
        </FormContainer>
      </Frame>
    </Container>
  )
}
