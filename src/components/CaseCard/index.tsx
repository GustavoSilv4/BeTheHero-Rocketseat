import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CaseContext } from '../../contexts/CaseContext'
import { ButtonDelete, Container, InfoCard } from './styles'

interface CardProps {
  id: number
  title: string
  description: string
  value: number
}

export function CaseCard({ id, title, description, value }: CardProps) {
  const { deleteCase } = useContext(CaseContext)

  function handleDeleteCase() {
    deleteCase(id)
  }

  return (
    <Container>
      <InfoCard>
        <h3>CASO:</h3>
        <span>{title}</span>
        <h3>DESCRICAO:</h3>
        <span>{description}</span>
        <h3>VALOR:</h3>
        <span>R$ {String(value)}</span>
      </InfoCard>
      <ButtonDelete onClick={handleDeleteCase}>
        <Trash size={24} />
      </ButtonDelete>
    </Container>
  )
}
