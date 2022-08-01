import { createContext, ReactNode } from 'react'

export const CaseContext = createContext({})

interface CaseContextProviderProps {
  children: ReactNode
}

export function CaseContextProvider({ children }: CaseContextProviderProps) {
  return <CaseContext.Provider value={{}}>{children}</CaseContext.Provider>
}
