import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';


const Sosmed = () => {
  return (
    <div className='flex justify-center items-center text-4xl gap-4 max-w-sm mx-auto mt-4'>
      <a href="https://wa.me/628995101187"> <FaWhatsapp /> </a>
      <a href="https://www.instagram.com/agengari/"> <AiOutlineInstagram /> </a>
      <a href="https://www.linkedin.com/in/agengari/"> <AiOutlineLinkedin /> </a>
      <a href="mailto:agengarinugroho@gmail.com"> <FiMail /> </a>
    </div>
  )
}

export default Sosmed