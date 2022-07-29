import { ArrowLeft } from 'phosphor-react'
import { Container, FormContainer, Frame, InfoContainer, Logo } from './styles'

import logo from '../../assets/Logo.svg'

export function Register() {
  return (
    <Container>
      <Frame>
        <InfoContainer>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <h1>Cadastro</h1>
          <span>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</span>
          <button>
            <ArrowLeft size={24} weight="bold" /> Voltar para o logon
          </button>
        </InfoContainer>
        <FormContainer action="">
          <input type="text" placeholder="Nome da ONG" />
          <input type="text" placeholder="E-mail" />
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
