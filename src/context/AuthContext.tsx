import { createContext } from 'react'

import { useAuth } from 'hooks/useAuth'

import { Auth } from 'components/atoms/Auth'

let AuthContext: any
const { Provider } = (AuthContext = createContext({}) as any)

let AuthProvider = ({ children }: any) => {
  let { auth, signIn, signOut } = useAuth()
  return (
    <Provider value={{ auth, signIn, signOut }}>
      <Auth />
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
