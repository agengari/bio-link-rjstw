import React, { useState } from 'react'
import { HiDotsCircleHorizontal } from 'react-icons/hi';

const Header = ({darkTheme, setDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <button className='absolute top-3 left-2 button text-base bg-white dark:bg-slate-800 dark:text-white border rounded-full px-2 py-1 hover:shadow-md hover:scale-105 active:scale-95 transition' onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>

        <a href="#" onClick={toggleModal} className='absolute top-3 right-2 text-3xl text-white bg-gray-300 dark:text-slate-800 dark:bg-white rounded-full hover:scale-105 active:scale-95 transition'> <HiDotsCircleHorizontal /> </a>
        
        <img src={ require('../assets/img/marbled.jpg') } alt="Foto Profil" className='h-36 rounded-b-3xl w-screen object-cover' />
        
        {isOpen && (
        <div className="fixed inset-x-0 bottom-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-end h-full z-10 transition">
          <div className="bg-white w-full rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center text-slate-900">Other:</h2>
            <hr />
            <p>Isi konten modal di sini</p>
            <div className='text-center'>
              <button onClick={toggleModal} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
                Tutup Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header