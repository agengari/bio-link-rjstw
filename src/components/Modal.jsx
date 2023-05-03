import React from 'react'

export const Modal = ({toggleModal}) => {
  return (
    <div>
      <div className="fixed inset-x-0 bottom-0 flex items-center justify-center z-10">
          <div className="bg-white w-full rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Ini adalah modal</h2>
            <p>Isi konten modal di sini</p>
            <button onClick={toggleModal} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
              Tutup Modal
            </button>
          </div>
        </div>
    </div>
  )
}
