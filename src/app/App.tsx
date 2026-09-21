import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <AppRouter />
    </BrowserRouter>
  )
}
