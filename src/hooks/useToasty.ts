import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useToasty = () => {
  const [toasty, setToasty] = useState('')
  const [toastyContent, setToastyContent] = useState() as any

  const handleToasty = (content = '', appearance = '', reload = false) => {
    if (content) {
      setToastyContent(content)
      switch (appearance) {
        case 'warn':
          toast.warn(content)
          break
        case 'info':
          toast.info(content)
          break
        case 'error':
          toast.error(content)
          break
        case 'success':
          toast.success(content)
          break
        default:
          toast(content)
      }
      if (reload) {
        setTimeout(() => {
          document.location.reload()
        }, 5000)
      }
    }
  }

  return { toasty, setToasty, handleToasty, toastyContent }
}
