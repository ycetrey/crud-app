import { TokenServiceStoreParams } from './types'

export const storeToken = ({ token }: TokenServiceStoreParams): void => {
  localStorage.setItem('@RAuth:token', `Bearer ${token}`)
}

export const removeToken = (): void => {
  localStorage.removeItem('@RAuth:token')
}

export const loadToken = (): string | null =>
  localStorage.getItem('@RAuth:token')
