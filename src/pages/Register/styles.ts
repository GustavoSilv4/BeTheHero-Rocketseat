import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 6rem;
  border-radius: 8px;

  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
`

export const InfoContainer = styled.div`
  > h1 {
    font-size: 2.25rem;
    font-weight: 500;
    margin-bottom: 2rem;

    color: ${(props) => props.theme['title-primary']};
  }

  > span {
    display: block;
    max-width: 24rem;
    font-size: 1.125rem;
    font-weight: normal;
    line-height: 1.6;

    margin-bottom: 5rem;

    color: ${(props) => props.theme['text-primary']};
  }

  > a {
    display: flex;
    align-items: center;
    border: none;
    gap: 1rem;

    cursor: pointer;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;

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

export const Logo = styled.div`
  width: 12rem;
  height: 5rem;
  margin-bottom: 4rem;

  > img {
    width: 100%;
  }
`

export const FormContainer = styled.form`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 1.25rem 1.5rem;
    border: 1.5px solid ${(props) => props.theme['input-line']};
    border-radius: 8px;

    font-size: 1.125rem;

    color: ${(props) => props.theme['title-secondary']};

    ::placeholder {
      color: ${(props) => props.theme['text-secondary']};
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }

  > div :nth-child(2) {
    width: 4.375rem;
  }

  > button {
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
