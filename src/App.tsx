import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LoginPage } from 'components/Pages/Login'
import { PessoaPage } from 'components/Pages/Pessoa'
import { CssBaseline } from '@mui/material'
import { AuthProvider, ToastyProvider } from 'context'
import { useAuth } from 'hooks/useAuth'
import { WithChildren } from 'types'

const queryClient = new QueryClient()

function PrivateRoute({ children, ...rest }: WithChildren) {
  const { auth } = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

function App() {
  const { auth } = useAuth()
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AuthProvider>
          <ToastyProvider>
            <CssBaseline />
            <Router>
              <Switch>
                <Route exact path="/">
                  {auth.username ? <Redirect to="/crud" /> : <LoginPage />}
                </Route>
                <PrivateRoute path="/crud">
                  <PessoaPage />
                </PrivateRoute>
              </Switch>
            </Router>
          </ToastyProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
