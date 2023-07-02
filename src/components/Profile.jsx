import React from 'react'
import { VscVerifiedFilled } from 'react-icons/vsc'

const Profile = () => {
  return (
    <div className="grid max-w-sm gap-2 mx-auto -mt-16 text-center">
      <section className="grid justify-center">
        <img src={require('../assets/img/1675760889282.jpg')} alt="Foto Profil" className="rounded-full h-28" />
      </section>
      <section className="mx-auto align-middle">
        <p className="flex mt-4 text-xl font-bold text-slate-900 dark:text-white ">
          Ageng Ari .N.{' '}
          <span className="pl-2 text-2xl text-blue-700">
            <VscVerifiedFilled />
          </span>
        </p>
      </section>
      <section className="text-sm">
        <p className="">Based in 📌 Yogyakarta, Indonesia</p>
        <p>
          <span> </span> Interest in Front-End Web Developer.
        </p>
      </section>
      <section className=""></section>
    </div>
  )
}

export default Profile
