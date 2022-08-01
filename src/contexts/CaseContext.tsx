import { createContext, ReactNode, useState } from 'react'

interface CasesProps {
  id?: number
  title: string
  description: string
  value: number
}

interface CaseContextProps {
  registerNewCase: ({ title, description, value }: CasesProps) => void
  deleteCase: (id: number) => void
  cases: CasesProps[]
}

export const CaseContext = createContext({} as CaseContextProps)

interface CaseContextProviderProps {
  children: ReactNode
}
export function CaseContextProvider({ children }: CaseContextProviderProps) {
  const [cases, setCases] = useState<CasesProps[]>([])

  function registerNewCase({ title, description, value }: CasesProps) {
    const newCase = {
      id: new Date().getTime(),
      title,
      description,
      value,
    }

    setCases((state) => [...state, newCase])
  }

  function deleteCase(id: number) {
    const caseswithoutDeleted = cases.filter((c) => c.id !== id)

    setCases(caseswithoutDeleted)
  }

  console.log('Cases', cases)

  return <CaseContext.Provider value={{ registerNewCase, deleteCase, cases }}>{children}</CaseContext.Provider>
}
