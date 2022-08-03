import { BrowserRouter } from 'react-router-dom'
import { CaseContextProvider } from './contexts/CaseContext'
import { UserContextProvider } from './contexts/UserContext'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CaseContextProvider>
          <Router />
        </CaseContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}
