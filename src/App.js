import './App.css'
import React from 'react'
import Profile from './components/Profile'
import Sosmed from './components/Sosmed'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center font-poppins bg-white'>
        <div className=''>
            <Header />
            <Profile />
            <Sosmed />
            <Button />
            <Footer />
        </div>
    </div>
  )
}

export default App