import logo from '../../assets/Logo.svg'

import { Power } from 'phosphor-react'
import { CasesBox, CasesContainer, Container, HeaderContainer, Logout, NavBar, NewCaseButton } from './styles'
import { CaseCard } from '../../components/CaseCard'

export function Home() {
  return (
    <Container>
      <HeaderContainer>
        <div>
          <img src={logo} alt="" />
          <span>Bem vinda, APAD</span>
        </div>
        <NavBar>
          <NewCaseButton>Cadastrar novo caso</NewCaseButton>
          <Logout>
            <Power size={24} weight="bold" />
          </Logout>
        </NavBar>
      </HeaderContainer>

      <CasesContainer>
        <h1>Casos cadastrados</h1>
        <CasesBox>
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
        </CasesBox>
      </CasesContainer>
    </Container>
  )
}
