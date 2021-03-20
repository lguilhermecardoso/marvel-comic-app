import { Home } from "./components/Home"
import { GlobalStyle } from "./styles/global"

import { HQProvider } from './contexts/HQSelectedContext'
function App() {
  
  return (
    <HQProvider>
      <Home/>
      <GlobalStyle />
    </HQProvider>
  )
}

export default App;
