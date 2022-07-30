import { Trash } from 'phosphor-react'
import { ButtonDelete, Container, InfoCard } from './styles'

export function CaseCard() {
  return (
    <Container>
      <InfoCard>
        <h3>CASO:</h3>
        <span>Cadelinha atropelada</span>
        <h3>DESCRICAO:</h3>
        <span>
          A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
        </span>
        <h3>VALOR:</h3>
        <span>R$ 120,00</span>
      </InfoCard>
      <ButtonDelete>
        <Trash size={24} />
      </ButtonDelete>
    </Container>
  )
}
