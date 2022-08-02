import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { CaseContextProvider } from './contexts/CaseContext'
import { UserContextProvider } from './contexts/UserContext'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CaseContextProvider>
          <ChakraProvider>
            <Router />
          </ChakraProvider>
        </CaseContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}
