import { createContext, ReactNode, useState } from 'react'

interface UserProps {
  id: number
  name: string
  email: string
}
interface UserContextType {
  registerNewUser: (name: string, email: string) => number
  findUserLogin: (id: number) => boolean
  userLogout: () => void
  activeUser: UserProps | null
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([
    {
      id: 1659315721367,
      email: 'gustavo@gmail.com',
      name: 'Gustavo',
    },
  ])

  const [activeUser, setActiveUser] = useState<UserProps | null>(null)

  function registerNewUser(name: string, email: string): number {
    const newUser = {
      id: new Date().getTime(),
      name,
      email,
    }

    setUsers((state) => [...state, newUser])

    return newUser.id
  }

  function findUserLogin(id: number): boolean {
    const existUser = users.find((user) => user.id === id)

    let success: boolean

    if (!existUser) {
      success = false
    } else {
      setActiveUser(existUser)
      success = true
    }

    return success
  }

  function userLogout() {
    setActiveUser(null)
  }

  return (
    <UserContext.Provider value={{ registerNewUser, findUserLogin, userLogout, activeUser }}>
      {children}
    </UserContext.Provider>
  )
}
