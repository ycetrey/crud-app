import axios from 'axios'
import { empty } from 'helpers'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_V2_URL,
  timeout: 10000,
})

api.interceptors.request.use((config) => {
  const storagedUser = localStorage.getItem('@RAuth:user') || ''
  const storagedToken = localStorage.getItem('@RAuth:token') || ''

  if (!empty(storagedUser) && !empty(storagedToken)) {
    if (config != null) {
      config!.headers!.Authorization = `Bearer ${storagedToken}`
    }
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem('@RAuth:user')
      localStorage.removeItem('@RAuth:token')
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)
