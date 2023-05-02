import React from 'react'

const Button = () => {
  return (
    <div className='max-w-sm mx-auto grid justify-center gap-4 mt-4 font-bold'>
      <a href="#" className='bg-yellow-300 rounded-2xl text-center border-black border-2 py-3 px-20 shadow-lg'>
        Website CV 🕵️
      </a>
      <a href="#" className='bg-blue-300 rounded-2xl text-center border-black border-2 py-3 shadow-lg'>
        Portfolio 🦾
      </a>
      <a href="#" className='bg-slate-300 rounded-2xl text-center border-black border-2 py-3 shadow-lg'>
        Github 👣
      </a>
      
    </div>
  )
}

export default Button