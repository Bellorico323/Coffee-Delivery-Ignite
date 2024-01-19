import { ThemeProvider } from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CoffeeContextProvider>
        <Header />
        <Outlet />
      </CoffeeContextProvider>
    </ThemeProvider>
  )
}
