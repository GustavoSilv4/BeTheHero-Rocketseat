import { ArrowLeft } from 'phosphor-react'
import { Container, FormContainer, Frame, InfoContainer, Logo } from './styles'

import logo from '../../assets/Logo.svg'

export function RegisterNewCase() {
  return (
    <Container>
      <Frame>
        <InfoContainer>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <h1>Cadastro novo caso</h1>
          <span>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</span>
          <button>
            <ArrowLeft size={24} weight="bold" /> Voltar para home
          </button>
        </InfoContainer>
        <FormContainer action="">
          <input type="text" placeholder="Título do caso" />
          <textarea placeholder="Descreva o caso" />
          <input type="text" placeholder="Valor em reais" />
          <button type="submit">Cadastrar</button>
        </FormContainer>
      </Frame>
    </Container>
  )
}
