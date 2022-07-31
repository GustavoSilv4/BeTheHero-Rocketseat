import logo from '../../assets/Logo.svg'

import { Power } from 'phosphor-react'
import { CasesBox, CasesContainer, Container, HeaderContainer, Logout, NavBar, NewCaseButton } from './styles'
import { CaseCard } from '../../components/CaseCard'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  function handleLogout() {
    navigate('/')
  }

  return (
    <Container>
      <HeaderContainer>
        <div>
          <img src={logo} alt="" />
          <span>Bem vinda, APAD</span>
        </div>
        <NavBar>
          <NewCaseButton to={'/newcase'}>Cadastrar novo caso</NewCaseButton>
          <Logout onClick={handleLogout}>
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
