import { useState } from 'react'
import { Header } from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import './App.css'
// import Carousel from './Components/Utils/Carousel'
import Home from './Components/Utils/Home'

function App() {


  return (  
    <>
      <Header />
        {/* <Carousel /> */}
        <Home />
      <Footer />
    </>
  )
}

export default App