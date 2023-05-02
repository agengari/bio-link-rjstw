import './App.css'
import React from 'react'
import Profile from './components/Profile'
import Sosmed from './components/Sosmed'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center font-poppins bg-gradient-to-b from-slate-200 via-slate-50 to bg-slate-300'>
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