import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'

function App() {

  return (
    <div className='w-full bg-zinc-900'>
       <Navbar />
       <Work />
       <Stripes />
       <Products />
       <Marquees />
       <Cards />
    </div>
  )
}

export default App
