import './App.css'
import React, { useState } from 'react'
import Profile from './components/Profile'
import Sosmed from './components/Sosmed'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='h-screen w-screen flex justify-center font-poppins bg-white text-slate-500 dark:bg-slate-800 dark:text-slate-400'>
        <div className=''>
            <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Profile />
            <Sosmed darkTheme={darkTheme}/>
            <Button darkTheme={darkTheme}/>
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default App


