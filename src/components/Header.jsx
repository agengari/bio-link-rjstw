import React from 'react'
import { HiDotsCircleHorizontal } from 'react-icons/hi';

const Header = ({darkTheme, setDarkTheme}) => {
  return (
    <div>
        <button className='absolute top-3 left-2 button text-base bg-white dark:bg-slate-800 dark:text-white border rounded-full px-2 py-1 hover:shadow-md' onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? 'Light 💡' : 'Dark 🌙'}
          </button>
        <a href="#" className='absolute top-3 right-2 text-3xl text-white bg-gray-300 dark:text-slate-800 dark:bg-white rounded-full'> <HiDotsCircleHorizontal /> </a>
        <img src={ require('../assets/img/marbled.jpg') } alt="Foto Profil" className='h-36 rounded-b-3xl w-screen object-cover' />
    </div>
  )
}

export default Header