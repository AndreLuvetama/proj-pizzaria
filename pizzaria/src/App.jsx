
import './App.css'
import CarrinhoPage from './pages/CarrinhoPage'

import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { RegisterPage } from './pages/RegisterPage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='carrinho' element={<CarrinhoPage />} />
        <Route path='register' element={<RegisterPage />} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
