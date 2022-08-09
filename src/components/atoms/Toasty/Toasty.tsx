import ReactDOM from 'react-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
export const Toasty = () => {
  return ReactDOM.createPortal(
    <ToastContainer />,
    document.querySelector('#useToastify')!
  )
}
