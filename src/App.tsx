import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </BrowserRouter>
  )
}
