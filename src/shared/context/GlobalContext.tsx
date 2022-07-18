import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '../models/user'

const GlobalContext = createContext<{
  users: User[]
  setUsers: (users: User[]) => void
  token: string | null
  setToken: (token: string | null) => void
}>({
  users: [],
  setUsers: (_) => {},
  token: null,
  setToken: (_) => {},
})

// @ts-ignore
export function GlobalContextProvider({ children }) {
  const [users, setUsers] = useState<User[]>([])
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token') ?? JSON.stringify(null)))
  }, [])

  const sharedState = {
    users,
    setUsers,
    token,
    setToken,
  }

  return (
    // @ts-ignore
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
