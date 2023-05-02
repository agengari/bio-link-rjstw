import React from 'react'
import { HiDotsCircleHorizontal } from 'react-icons/hi';

const Header = () => {
  return (
    <div>
        <a href="#" className='absolute top-3 right-2 text-4xl text-white bg-gray-700 rounded-full'> <HiDotsCircleHorizontal /> </a>
        <img src={ require('../assets/img/Header.jpg') } alt="Foto Profil" className='h-36 rounded-b-xl w-screen object-cover' />
    </div>
  )
}

export default Header