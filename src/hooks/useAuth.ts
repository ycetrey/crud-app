import { useCallback, useState } from 'react'
import { empty } from 'helpers'
import { api } from 'configs/api/v2/axios'
import { useToasty } from './useToasty'
export type ErrorProps = {
  error?: string
  username?: boolean
  password?: boolean
}

type AuthState = {
  accessToken: string
  username: string
}

type signInProps = {
  username: string
  password: string
}

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const { handleToasty } = useToasty()
  const [error, setError] = useState<ErrorProps>({
    error: '',
    username: false,
    password: false,
  })

  const [auth, setAuth] = useState<AuthState>(() => {
    const storagedUser = localStorage.getItem('@RAuth:user') || ''
    const storagedToken = localStorage.getItem('@RAuth:token') || ''
    if (!empty(storagedUser) && !empty(storagedToken)) {
      return {
        accessToken: storagedToken,
        username: storagedUser,
      }
    }
    return {} as AuthState
  })

  const signIn = useCallback(
    async (values: signInProps) => {
      let response
      handleToasty('Aguarde...', 'info', true)
      try {
        response = await api.post(`/login`, values)
        if (!empty(response.data.erros)) {
          throw new Error('oops')
        }
      } catch (e) {
        setError({
          error: response?.data?.erros || 'Usuário ou senha invalidos.',
        })
        return setAuth({ accessToken: '', username: '' })
      }
      const { accessToken } = response.data
      const { nome: username } = response.data.data
      setAuth({ accessToken, username })
      localStorage.setItem('@RAuth:user', username)
      localStorage.setItem('@RAuth:token', accessToken)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setError, user, setAuth]
  )

  const signOut = useCallback(() => {
    localStorage.removeItem('@RAuth:user')
    localStorage.removeItem('@RAuth:token')
    setUser(null)

    document.location.reload()
  }, [])

  return { auth, error, setError, signIn, signOut }
}
