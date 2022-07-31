import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.125rem;
`
export const LogonContainer = styled.div``

export const Logo = styled.div`
  margin-bottom: 6.25rem;
`

export const Logon = styled.div`
  > h1 {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${(props) => props.theme['title-primary']};
    margin-bottom: 2rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
    border: none;
    text-decoration: none;

    font-size: 1.125rem;
    font-weight: bold;

    color: ${(props) => props.theme['title-secondary']};

    transition: color 0.1s;

    :hover {
      color: #000000;
    }

    > svg {
      color: ${(props) => props.theme.red};
    }
  }
`

export const FormLogon = styled.form`
  > input {
    width: 22rem;
    padding: 1.25rem 1.5rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['input-line']};
    color: ${(props) => props.theme['title-secondary']};
    margin-bottom: 1rem;

    ::placeholder {
      color: ${(props) => props.theme['text-secondary']};
    }
  }

  > button {
    display: block;
    width: 22rem;
    padding: 1.25rem 0;
    margin-bottom: 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    font-size: 1.125rem;
    font-weight: bold;

    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.red};

    transition: background-color 0.1s;

    :hover {
      background-color: #d00024;
    }
  }
`

export const ImageLogonContainer = styled.div`
  > img {
    width: 100%;
  }
`
