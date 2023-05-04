import React, { useState, useEffect } from 'react'
import Profile from './components/Profile'
import Sosmed from './components/Sosmed'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;

      const documentHeight = document.documentElement.scrollHeight;

      setIsSticky(windowHeight < 580 && documentHeight > windowHeight);

      setContentHeight(windowHeight);
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`${isSticky ? 'overflow-hidden' : ''} ${darkTheme ? 'dark' : ''}`}>
      <div className={`${contentHeight > 580 ? 'h-screen' : 'h-full'} flex justify-center font-poppins ${darkTheme ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500'}`}>
        <div >
            <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
            <Profile />
            <Sosmed darkTheme={darkTheme}/>
            <Button darkTheme={darkTheme}/>
            <Footer isSticky={isSticky}/>
        </div>
      </div>
    </div>
  )
}

export default App


