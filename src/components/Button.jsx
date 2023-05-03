import React from 'react'

const Button = ({darkTheme}) => {
  return (
    <div className='max-w-sm mx-auto grid justify-center gap-4 mt-4 font-bold'>
      <a href="https://agengari.my.id" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 ${darkTheme ? 'text-white' : 'text-slate-900'} ${darkTheme ? 'bg-slate-800' : 'bg-white'} ${darkTheme ? 'hover:bg-slate-700' : 'hover:bg-slate-100'} ${darkTheme ? 'active:bg-slate-900' : 'active:bg-slate-200'}`}>
        Website CV 🕵️
      </a>
      <a href="https://agengari.my.id/portfolio/" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 ${darkTheme ? 'text-white' : 'text-slate-900'} ${darkTheme ? 'bg-slate-800' : 'bg-white'} ${darkTheme ? 'hover:bg-slate-700' : 'hover:bg-slate-100'} ${darkTheme ? 'active:bg-slate-900' : 'active:bg-slate-200'}`}>
        Portfolio 🦾
      </a>
      <a href="https://github.com/agengari" className={`rounded-2xl text-center border-amber-200 border-2 py-3 px-24 shadow-md shadow-amber-100 ${darkTheme ? 'text-white' : 'text-slate-900'} ${darkTheme ? 'bg-slate-800' : 'bg-white'} ${darkTheme ? 'hover:bg-slate-700' : 'hover:bg-slate-100'} ${darkTheme ? 'active:bg-slate-900' : 'active:bg-slate-200'}`}>
        Github 👣
      </a>
    </div>
  )
}

export default Button