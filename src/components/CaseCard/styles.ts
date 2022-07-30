import styled from 'styled-components'

export const Container = styled.div`
  max-width: 34rem;
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme.input};
`

export const InfoCard = styled.div`
  h3 {
    font-size: 0.875rem;
    font-weight: bold;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['title-secondary']};
  }

  span {
    display: block;
    max-width: 30rem;
    font-size: 1.125rem;

    margin-bottom: 1.875rem;

    color: ${(props) => props.theme['text-primary']};
  }

  span:nth-child(6) {
    margin-bottom: 0rem;
  }
`
export const ButtonDelete = styled.button`
  padding: 0.1rem;
  line-height: 0;

  border: none;
  cursor: pointer;

  color: ${(props) => props.theme['text-secondary']};
  background-color: transparent;

  :hover {
    color: ${(props) => props.theme.red};
  }
`
