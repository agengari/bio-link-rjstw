import React from 'react'

const Button = ({darkTheme}) => {
  return (
    <div className='max-w-sm mx-auto grid justify-center gap-4 mt-4 font-bold'>
      <a href="https://agengari.my.id" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Website CV 🕵️
      </a>
      <a href="https://agengari.my.id/portfolio/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Portfolio 🦾
      </a>
      <a href="https://github.com/agengari" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 hover:scale-105 active:scale-95 transition ${darkTheme ? 'text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900' : 'text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200'}`}>
        Github 👣
      </a>
    </div>
  )
}

export default Button