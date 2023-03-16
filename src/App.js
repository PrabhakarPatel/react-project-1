import React from 'react'
import"./styles/app.scss"
import{BrowserRouter as Router ,Routes,Route}from "react-router-dom"
import Home from './components/Home'
import Headers from './components/Headers'
import {Toaster} from "react-hot-toast"
import Cart from './components/Cart'


const App = () => {
  return <Router>
    <Headers/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Toaster/>
  </Router>
  
}

export default App