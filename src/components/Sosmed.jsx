import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';


const Sosmed = () => {
  return (
    <div className='flex justify-center items-center text-4xl gap-4 max-w-sm mx-auto mt-4'>
      <a href=""> <FaWhatsapp /> </a>
      <a href=""> <AiOutlineInstagram /> </a>
      <a href=""> <AiOutlineLinkedin /> </a>
      <a href=""> <FiMail /> </a>
    </div>
  )
}

export default Sosmed