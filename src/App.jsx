import {ThemeContextProvider} from './context/themeContext'
import { Header } from './components/Header'
import './styles/App.css'

export const App = () => {
    return (
      <>
          <ThemeContextProvider>
            <div className='app'>
              <Header></Header>
            </div>
          </ThemeContextProvider>
      </>
    )
}
