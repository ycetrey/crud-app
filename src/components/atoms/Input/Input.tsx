import { useFormContext, Controller } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const MKTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#5e5b5d',
    fontWeight: 400,
  },
  '& .MuiInputBase-input': {
    borderColor: '#c8d0d4',
  },
  '& .MuiInput-underline:after': {
    border: 'none',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#d32f2f',
      },
    },
    '& fieldset': {
      borderColor: '#c8d0d4',
      borderRadius: 0,
    },
    '&:hover fieldset': {
      border: '1px solid #c8d0d4',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #c8d0d4',
    },
  },
})

type InputProps = {
  name: string
} & TextFieldProps

type FieldError = {
  message?: string
}

const Input = ({ name, ...otherProps }: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const [message, setMessage] = useState<string>()

  const errorRef = errors[name] as FieldError

  useEffect(() => {
    const message = errorRef?.message || ''
    if (message) setMessage(message)
  }, [errors])

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <MKTextField
          {...field}
          {...otherProps}
          variant="outlined"
          sx={{ mb: '1.5rem' }}
          error={!!errors[name]}
          helperText={message}
        />
      )}
    />
  )
}

export default Input
