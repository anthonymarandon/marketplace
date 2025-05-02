'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header5() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='bg-gray-800 font-mono'> 
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-5'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <h1 className='text-2xl font-extrabold text-pink-500 uppercase tracking-wider'>
              SocietyName
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500' 
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-pink-500 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-pink-500 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-pink-500 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:items-center lg:space-x-7'>
            <Link
              href='/'
              className='text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1'
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1'
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1'
            >
              Services
            </Link>
            <Link
              href='/events'
              className='text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1'
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors duration-200 border-b-2 border-transparent hover:border-pink-400 pb-1'
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='px-6 py-2 ml-5 bg-pink-600 text-white rounded-none text-sm font-bold uppercase tracking-wide hover:bg-pink-700 transition-colors duration-200 transform hover:-translate-y-0.5 shadow-md'
            >
              Rejoignez-nous
            </Link>
          </nav>
        </header>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-700 border-t border-gray-600`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 space-y-4">
            <Link
              href='/'
              className='block text-base font-medium text-gray-200 hover:text-pink-400 hover:bg-gray-600 px-3 py-2 rounded'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='block text-base font-medium text-gray-200 hover:text-pink-400 hover:bg-gray-600 px-3 py-2 rounded'
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='block text-base font-medium text-gray-200 hover:text-pink-400 hover:bg-gray-600 px-3 py-2 rounded'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/events'
              className='block text-base font-medium text-gray-200 hover:text-pink-400 hover:bg-gray-600 px-3 py-2 rounded'
              onClick={() => setIsOpen(false)}
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='block text-base font-medium text-gray-200 hover:text-pink-400 hover:bg-gray-600 px-3 py-2 rounded'
              onClick={() => setIsOpen(false)}
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='block w-full text-center px-6 py-3 mt-4 text-base font-bold uppercase tracking-wide text-white bg-pink-600 rounded-none hover:bg-pink-700 transition-colors duration-200'
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
