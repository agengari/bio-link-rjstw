import React from 'react'
import { BsInfoCircle } from 'react-icons/bs';

const Profile = () => {
  return (
    <div className='max-w-sm mx-auto text-center grid gap-2 -mt-16'>
      <section className='grid justify-center'>
        <img src={ require('../assets/img/1675760889282.jpg') } alt="Foto Profil" className='h-28 rounded-full' />
      </section>
      <section>
        <p className='text-xl font-bold mt-4 text-slate-900 dark:text-white'>Ageng Ari .N.</p>
      </section>
      <section className='text-sm'>
        <p className=''>Based in 📌 Yogyakarta, Indonesia</p>
        <p> 
          <a href="" className='display: inline-flex align-middle text-lg text-slate-900 dark:text-white'>
            <BsInfoCircle /> 
          </a> 
          <span>  </span> Interest in Front-End Web Developer.
        </p>
      </section>
      <section className=''>
      </section>
    </div>
  )
}

export default Profile