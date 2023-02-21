export type AuthServiceSignInParams = {
  username: string
  password: string
}

export type AuthServiceFetchSignInPayload = {
  data: {
    nome: string
    login: string
    administrativo: boolean
    production: boolean
    environment: string
    utilizador: number
  }
  accessToken: string
  tokenType: string
  expiresIn: number
}

export type AuthServiceSignInPayload = {
  nome: string
}
