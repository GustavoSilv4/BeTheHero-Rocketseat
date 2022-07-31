import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 10rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 3rem;

    img {
      width: 9rem;
      height: 3.875rem;
    }
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const NewCaseButton = styled(NavLink)`
  padding: 1.3rem 3rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  font-size: 1.125rem;
  font-weight: bold;

  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.red};

  :hover {
    background-color: #d00024;
  }
`

export const Logout = styled.button`
  display: flex;
  justify-content: center;
  padding: 1.125rem;
  border: 1px solid ${(props) => props.theme['input-line']};
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: #dedede;
  }

  svg {
    color: ${(props) => props.theme.red};
  }
`

export const CasesContainer = styled.main`
  margin-top: 5rem;

  > h1 {
    font-size: 2.25rem;
    font-weight: 500;

    margin-bottom: 1.875rem;

    color: ${(props) => props.theme['title-primary']};
  }
`

export const CasesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
