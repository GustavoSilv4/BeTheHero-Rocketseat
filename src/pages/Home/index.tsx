import logo from '../../assets/Logo.svg'

import { Power } from 'phosphor-react'
import { CasesBox, CasesContainer, Container, HeaderContainer, Logout, NavBar, NewCaseButton } from './styles'
import { CaseCard } from '../../components/CaseCard'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { CaseContext } from '../../contexts/CaseContext'

export function Home() {
  const { userLogout } = useContext(UserContext)
  const { cases } = useContext(CaseContext)

  const navigate = useNavigate()

  function handleLogout() {
    navigate('/')
    userLogout()
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
          {cases.map((c) => (
            <CaseCard key={c.id} id={c.id} title={c.title} description={c.description} value={c.value} />
          ))}
        </CasesBox>
      </CasesContainer>
    </Container>
  )
}
