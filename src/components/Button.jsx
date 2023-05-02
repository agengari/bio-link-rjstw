import React from 'react'

const Button = () => {
  return (
    <div className='max-w-sm mx-auto grid justify-center gap-4 mt-4 font-bold'>
      <a href="https://agengari.my.id" className='bg-white rounded-2xl text-center border-amber-200 border-2 py-3 px-20 shadow-md shadow-amber-100'>
        Website CV 🕵️
      </a>
      <a href="https://agengari.my.id/portfolio/" className='bg-white rounded-2xl text-center border-amber-200 border-2 py-3 shadow-md shadow-amber-100'>
        Portfolio 🦾
      </a>
      <a href="https://github.com/agengari" className='bg-white rounded-2xl text-center border-amber-200 border-2 py-3 shadow-md shadow-amber-100'>
        Github 👣
      </a>
      
    </div>
  )
}

export default Button