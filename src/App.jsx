import { createContext } from 'react'
import First from './components/First'
import UserProvider from './Context/UserProvider'

function App() {
  return (
    <>
    <UserProvider>
    <First />
    </UserProvider>
    </>
  )
}

export default App
