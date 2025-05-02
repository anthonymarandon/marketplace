import { Component } from "@/types/components";
import Header9 from "./header.react/header9";

export const componentHeader9: Component = {
  id: 'header9',
  name: 'Header 9',
  description: 'Client Component',
  category: 'header',
  component: Header9,
  code: `'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header9() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='bg-white font-sans border-b border-gray-200 shadow-sm'> 
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-4'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 text-2xl">★</span> 
              <h1 className='text-xl font-semibold text-gray-900'>
                SocietyName
              </h1>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
            >
              <div className="space-y-1.5">
                <span className={\`block w-5 h-0.5 bg-gray-600 transition-transform \${isOpen ? 'rotate-45 translate-y-2' : ''}\`}></span>
                <span className={\`block w-5 h-0.5 bg-gray-600 transition-opacity \${isOpen ? 'opacity-0' : ''}\`}></span>
                <span className={\`block w-5 h-0.5 bg-gray-600 transition-transform \${isOpen ? '-rotate-45 -translate-y-2' : ''}\`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:items-center lg:space-x-6'>
            <Link
              href='/'
              className='text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 px-1 py-2'
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 px-1 py-2'
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 px-1 py-2'
            >
              Services
            </Link>
            <Link
              href='/events'
              className='text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 px-1 py-2'
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 px-1 py-2'
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 px-3 py-2 ml-2 rounded-md hover:bg-blue-50'
            >
              Rejoignez-nous
            </Link>
          </nav>
        </header>
      </div>

      <div className={\`lg:hidden \${isOpen ? 'block' : 'hidden'} bg-gray-50 border-t border-gray-200\`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 space-y-1">
            <Link
              href='/'
              className='block text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
             <Link href='/about' className='block text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md' onClick={() => setIsOpen(false)}>À propos</Link>
             <Link href='/services' className='block text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md' onClick={() => setIsOpen(false)}>Services</Link>
             <Link href='/events' className='block text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md' onClick={() => setIsOpen(false)}>Événements</Link>
             <Link href='/members' className='block text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md' onClick={() => setIsOpen(false)}>Membres</Link>
            <Link
              href='/join'
              className='block w-full text-center px-4 py-2.5 mt-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm'
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
`
}