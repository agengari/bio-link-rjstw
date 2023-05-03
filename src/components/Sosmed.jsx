import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';


const Sosmed = ({darkTheme}) => {
  return (
    <div className='flex justify-center items-center text-4xl gap-4 max-w-sm mx-auto text-slate-500 dark:text-slate-400'>
      <a href="https://wa.me/628995101187" className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}> <FaWhatsapp /> </a>
      <a href="https://www.instagram.com/agengari/" className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}> <AiOutlineInstagram /> </a>
      <a href="https://www.linkedin.com/in/agengari/" className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}> <AiOutlineLinkedin /> </a>
      <a href="mailto:agengarinugroho@gmail.com" className={`hover:scale-105 active:scale-95 transition ${darkTheme ? 'hover:text-slate-200 active:text-white' : 'hover:text-slate-600 active:text-slate-900'}`}> <FiMail /> </a>
    </div>
  )
}

export default Sosmed