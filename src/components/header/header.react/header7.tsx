'use client'

import Link from "next/link";
import { useState } from "react"; 

export default function Header7() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div id='header'
      className={`bg-gray-100 shadow-sm font-sans`}
    > 
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-4'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <h1 className={`text-2xl font-bold text-gray-800`}>
              SocietyName
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:ring-green-500 focus:outline-none focus:ring-2 focus:ring-inset`}
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-gray-800 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-800 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-800 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:items-center lg:space-x-6'>
            <Link
              href='/'
              className={`text-sm font-medium text-gray-600 hover:text-green-600`}
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className={`text-sm font-medium text-gray-600 hover:text-green-600`}
            >
              À propos
            </Link>
            <Link
              href='/services'
              className={`text-sm font-medium text-gray-600 hover:text-green-600`}
            >
              Services
            </Link>
            <Link
              href='/events'
              className={`text-sm font-medium text-gray-600 hover:text-green-600`}
            >
              Événements
            </Link>
            <Link
              href='/members'
              className={`text-sm font-medium text-gray-600 hover:text-green-600`}
            >
              Membres
            </Link>
            <Link
              href='/join'
              className={`px-4 py-2 ml-4 rounded-full text-sm font-medium bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md`}
            >
              Rejoignez-nous
            </Link>
          </nav>
        </header>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 border-t border-gray-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 space-y-4">
            <Link
              href='/'
              className={`block text-base font-medium text-gray-600 hover:text-green-600`}
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link href='/about' className={`block text-base font-medium text-gray-600 hover:text-green-600`} onClick={() => setIsOpen(false)}>À propos</Link>
            <Link href='/services' className={`block text-base font-medium text-gray-600 hover:text-green-600`} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href='/events' className={`block text-base font-medium text-gray-600 hover:text-green-600`} onClick={() => setIsOpen(false)}>Événements</Link>
            <Link href='/members' className={`block text-base font-medium text-gray-600 hover:text-green-600`} onClick={() => setIsOpen(false)}>Membres</Link>
            <Link
              href='/join'
              className={`block w-full text-center px-4 py-2 mt-4 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-full`}
              onClick={() => setIsOpen(false)}
            >
              Rejoignez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

