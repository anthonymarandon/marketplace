'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-serif'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-4'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <h1 className='text-3xl font-semibold tracking-tight text-yellow-300'>
              SocietyName
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400' 
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-yellow-300 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-yellow-300 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-yellow-300 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:items-center lg:space-x-8'> 
            <Link
              href='/'
              className='text-sm font-medium text-gray-100 hover:text-yellow-300 hover:underline transition-colors duration-200'
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-100 hover:text-yellow-300 hover:underline transition-colors duration-200'
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-sm font-medium text-gray-100 hover:text-yellow-300 hover:underline transition-colors duration-200'
            >
              Services
            </Link>
            <Link
              href='/events'
              className='text-sm font-medium text-gray-100 hover:text-yellow-300 hover:underline transition-colors duration-200'
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='text-sm font-medium text-gray-100 hover:text-yellow-300 hover:underline transition-colors duration-200'
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='px-5 py-2 ml-6 bg-yellow-400 text-purple-800 rounded-md text-sm font-bold hover:bg-yellow-300 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105'
            >
              Rejoignez-nous
            </Link>
          </nav>
        </header>
      </div>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-indigo-700 border-t border-purple-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 space-y-5">
            <Link
              href='/'
              className='block text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='block text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='block text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/events'
              className='block text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='block text-lg font-medium text-gray-100 hover:text-yellow-300 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='block w-full text-center px-5 py-3 mt-5 text-lg font-bold text-purple-800 bg-yellow-400 rounded-md hover:bg-yellow-300 transition-colors duration-200'
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
