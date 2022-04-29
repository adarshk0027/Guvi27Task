import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBarWrapper from "./Components/NavBar'"
import RouterConfig from './Components/RouterDom'
function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBarWrapper></NavBarWrapper>
        <RouterConfig>
        
        </RouterConfig>
      </BrowserRouter>
    </div>
  )
}

export default App
