import { Container, Grid } from '@mui/material'
import { LoginForm } from 'components/organisms/Form/Login'
import { useAuth } from 'hooks/useAuth'

export const LoginPage = () => {
  const { auth } = useAuth()
  console.log('auth', auth)
  if (auth.username) document.location.href = '/dashboard'

  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', height: '100%' }}
      >
        <Grid
          item
          sx={{ maxWidth: '70rem', width: '100%', backgroundColor: '#fff' }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  )
}
