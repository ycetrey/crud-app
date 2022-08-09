import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react text', () => {
  render(<App />)
  const textElement = screen.getByText(/IDENTIFICAÇÃO/i)
  expect(textElement).toBeInTheDocument()
})
