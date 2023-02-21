import { removeToken, storeToken } from 'services/token-service'

import { api } from 'configs/api/v2/axios'

import { Usuario } from 'requests/types/usuario'

import { AuthServiceSignInParams, AuthServiceFetchSignInPayload } from './types'

export const fetchSignIn = (
  data: any
): Promise<AuthServiceFetchSignInPayload> =>
  api.post('/login', data).then((res: any) => res.data)

export const signIn = async ({
  username,
  password,
}: AuthServiceSignInParams): Promise<Usuario> => {
  const { accessToken, data } = await fetchSignIn({
    username,
    password,
  })

  storeToken({ token: accessToken })

  return { accessToken, data } as Usuario
}

export const signOut = async () => {
  removeToken()
  window.location.hash = '/'
}
