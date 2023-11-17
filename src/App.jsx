import React from 'react'
import Header from './components/Header'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Services from './pages/Services'
import Software from './pages/Software'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/About' element={ <About/> }/>
                <Route path='/Contect' element={ <Contect/> }/>
                <Route path='/Services' element={ <Services/> }/>
                <Route path='/Software' element={ <Software/> }/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App