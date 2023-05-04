import React, { useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const Header = ({darkTheme, setDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <a href="#" onClick={toggleModal} className='absolute top-4 left-3 display: inline-flex align-middle text-2xl text-slate-900 hover:scale-105 active:scale-95 transition animate-pulse'>
            <BsInfoCircle /> 
        </a> 
        
        <button className='absolute top-4 right-3 button text-base bg-white dark:bg-slate-800 dark:text-white border rounded-full px-2 py-1 hover:shadow-md hover:scale-105 active:scale-95 transition' onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
        
        <img src={ require('../assets/img/marbled.jpg') } alt="Foto Profil" className='h-36 rounded-b-3xl w-screen object-cover' />
        
        {isOpen && (
        <div className={`fixed inset-0 ${darkTheme ? 'bg-white' : 'bg-black'} bg-opacity-10 backdrop-blur-sm flex justify-center items-center h-full z-10 transition`}>
          <div className={`${darkTheme ? 'bg-slate-800 text-slate-100' : 'bg-white'}  md:w-full max-w-md rounded-2xl shadow-lg p-4 mx-4`}>
            <h2 className={`text-2xl font-bold mb-4 text-center ${darkTheme ? 'text-white' : 'text-slate-900'}`}>Other:</h2>
            <hr />
            <div className='grid gap-2 pt-2'>
              <section className={`${darkTheme ? 'bg-slate-600' : 'bg-slate-100'} rounded-xl p-2`}>
                <p className='text-xl font-bold border-b border-white'>About</p>
                <p className='pt-2'>This website was built using the <span className={`font-bold ${darkTheme ? 'text-white' : 'text-slate-500'}`}>ReactJS</span> and <span className={`font-bold ${darkTheme ? 'text-white' : 'text-slate-500'}`}>Tailwind CSS</span>.</p>
              </section>
              <section className={`${darkTheme ? 'bg-slate-600' : 'bg-slate-100'} rounded-xl p-2`}>
                <p className='text-xl font-bold border-b border-white'>Share</p>
                <div className='grid grid-cols-3 justify-items-center pt-2'>
                  <div>
                    <FacebookShareButton url='https://bio.agengari.my.id' className='grid grid-cols-1 justify-items-center'>
                      <FacebookIcon size={46} round={true} />
                      <p>Facebook</p>
                    </FacebookShareButton>
                  </div>
                  <div>
                    <WhatsappShareButton url='https://bio.agengari.my.id' className='grid grid-cols-1 justify-items-center'>
                      <WhatsappIcon size={46} round={true} />
                      <p>Whatsapp</p>
                    </WhatsappShareButton>
                  </div>
                  <div>
                    <TelegramShareButton url='https://bio.agengari.my.id' className='grid grid-cols-1 justify-items-center'>
                      <TelegramIcon size={46} round={true} />
                      <p>Telegram</p>
                    </TelegramShareButton>
                  </div>
                </div>
              </section>
            </div>

            <div className='text-center'>
              <button onClick={toggleModal} className={`mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded`}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header