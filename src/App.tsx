import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { LoginPage } from 'components/Pages/Login'
import { PessoaPage } from 'components/Pages/Pessoa'
import { CssBaseline } from '@mui/material'
import { AuthProvider, ToastyProvider } from 'context'
import { useAuth } from 'hooks/useAuth'
import { WithChildren } from 'types'

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
    </>
  )
}

export default App
