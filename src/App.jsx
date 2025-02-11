import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
function App() {

  return (
  
    <div className='w-full h-screen bg-black text-zinc-100'>
     <Navbar/>
     <Work/>
     <Stripes/>
     <Products/>
     <Marquees/>
     <Cards/>
     <Footer/>
    </div>
    
  )
}

export default App
