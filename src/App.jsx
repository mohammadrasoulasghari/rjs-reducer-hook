import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Cources from "./Pages/Cources"

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="cources" element={<Cources/>} />
   </Routes>
  )
}

export default App
