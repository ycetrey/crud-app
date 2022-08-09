import { useContext } from 'react'
import ReactDOM from 'react-dom'

import { AuthContext } from 'context/AuthContext'

export const Auth = () => {
  let { authContent, auth } = useContext<any>(AuthContext)

  if (auth) {
    return ReactDOM.createPortal(
      <>{authContent}</>,
      document.querySelector('#userAuth')!
    )
  } else return null
}
