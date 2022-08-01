import { createContext, ReactNode, useState } from 'react'

interface UserContextType {
  registerNewUser: (name: string, email: string) => number
  findUserLogin: (id: number) => string
  userLogout: () => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

interface UserProps {
  id: number
  name: string
  email: string
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([
    {
      id: 1659315721367,
      email: 'gustavo@gmail.com',
      name: 'Gustavo',
    },
  ])

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

  function findUserLogin(id: number): string {
    const existUser = users.find((user) => user.id === id)

    let message: string = ''

    if (!existUser) {
      message = 'ID não encontrado'
    } else {
      setActiveUser(existUser)
      message = 'ID logado com sucesso'
    }

    return message
  }

  function userLogout() {
    setActiveUser({} as UserProps)
  }

  console.log(users)
  console.log(activeUser)

  return <UserContext.Provider value={{ registerNewUser, findUserLogin, userLogout }}>{children}</UserContext.Provider>
}
