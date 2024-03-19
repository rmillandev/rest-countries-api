import { ThemeContextProvider } from './context/themeContext'
import { Header } from './components/Header'
import './styles/App.css'
import { Main } from './components/Main'

export const App = () => {
  return (
    <ThemeContextProvider>
      <div className='app'>
        <Header />
        <Main />
      </div>
    </ThemeContextProvider>
  )
}
