import { createContext } from 'react'

import { useToasty } from 'hooks/useToasty'

import { Toasty } from 'components/atoms/Toasty'

let ToastyContext: any
const { Provider } = (ToastyContext = createContext({}) as any)

let ToastyProvider = ({ children }: any) => {
  let { toasty, setToasty, handleToasty, toastyContent } = useToasty()
  return (
    <Provider value={{ toasty, setToasty, handleToasty, toastyContent }}>
      <Toasty />
      {children}
    </Provider>
  )
}

export { ToastyContext, ToastyProvider }
