import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalContextProvider} from './shared/context/GlobalContext'

function App() {
  return (
    <GlobalContextProvider>
      <HomePage></HomePage>
    </GlobalContextProvider>
  )
}

export default App
