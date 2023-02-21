import { Grid, Box, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from 'components/atoms/Input/Input'
import { useAuth } from 'hooks/useAuth'

const loginSchema = object({
  username: string().min(1, 'Usuário é requerido'),
  password: string()
    .min(1, 'Password é requerido')
    .min(4, 'Password tem que ter mais de 4 caracteres')
    .max(32, 'Password tem que ter menos de 32 caracteres'),
})

type ILogin = TypeOf<typeof loginSchema>

export const LoginForm = () => {
  const { signIn } = useAuth()
  const defaultValues: ILogin = {
    username: '',
    password: '',
  }

  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  const onSubmitHandler: SubmitHandler<ILogin> = async (values: ILogin) => {
    await signIn(values)
  }

  return (
    <FormProvider {...methods}>
      <Grid
        container
        sx={{
          boxShadow: { sm: '0 0 5px #ddd' },
          py: '6rem',
          px: '1rem',
        }}
        columns={12}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item rowSpacing={5} xs={6}>
          <Box
            display="flex"
            flexDirection="column"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={methods.handleSubmit(onSubmitHandler)}
          >
            <Typography
              variant="h6"
              component="h1"
              sx={{ textAlign: 'center', mb: '1.5rem' }}
            >
              IDENTIFICAÇÃO
            </Typography>

            <Input
              label="Usuário"
              type="text"
              name="username"
              focused
              required
            />
            <Input
              type="password"
              label="Password"
              name="password"
              required
              focused
            />
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{
                py: '0.8rem',
                mt: 2,
                width: '80%',
                marginInline: 'auto',
              }}
            >
              Login
            </LoadingButton>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}
