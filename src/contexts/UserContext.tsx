import { createContext, ReactNode, useState } from 'react'

export const UserContext = createContext({})

interface UserContextProviderProps {
  children: ReactNode
}

interface UserProps {
  id: number
  name: string
  email: string
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([])

  const [activeUser, setActiveUser] = useState<UserProps>({} as UserProps)

  function registerNewUser(name: string, email: string): number {
    const newUser = {
      id: new Date().getTime(),
      name,
      email,
    }

    setUsers((state) => [...state, newUser])

    return newUser.id
  }

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
