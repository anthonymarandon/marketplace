import { Component } from "@/types/components";
import Header8 from "./header.react/header8";

export const componentHeader8: Component = {
  id: 'header8',
  name: 'Header 8',
  description: 'Client Component',
  category: 'header',
  component: Header8,
  code: `'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header8() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='font-sans'> 
      <div className="bg-indigo-800 text-white py-1 text-center text-xs">
        Annonce importante ou lien rapide ici!
      </div>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <header className='flex flex-col lg:flex-row items-center justify-between py-3'>
            <div className='flex items-center justify-between w-full lg:w-auto'>
              <h1 className='text-2xl font-bold text-indigo-900'>
                SocietyName
              </h1>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <div className="space-y-1.5">
                  <span className={\`block w-5 h-0.5 bg-indigo-700 transition-transform \${isOpen ? 'rotate-45 translate-y-2' : ''}\`}></span>
                  <span className={\`block w-5 h-0.5 bg-indigo-700 transition-opacity \${isOpen ? 'opacity-0' : ''}\`}></span>
                  <span className={\`block w-5 h-0.5 bg-indigo-700 transition-transform \${isOpen ? '-rotate-45 -translate-y-2' : ''}\`}></span>
                </div>
              </button>
            </div>

            <nav className='hidden lg:flex lg:items-center lg:space-x-6'>
              <Link
                href='/'
                className='text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200'
              >
                Accueil
              </Link>
              <Link
                href='/about'
                className='text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200'
              >
                À propos
              </Link>
              <Link
                href='/services'
                className='text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200'
              >
                Services
              </Link>
              <Link
                href='/events'
                className='text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200'
              >
                Événements
              </Link>
              <Link
                href='/members'
                className='text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200'
              >
                Membres
              </Link>
              <Link
                href='/join'
                className='px-5 py-2 ml-4 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 shadow'
              >
                Rejoignez-nous
              </Link>
            </nav>
          </header>
        </div>
      </div>

      <div className={\`lg:hidden \${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200 shadow-lg\`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 space-y-4">
            <Link
              href='/'
              className='block text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 p-2 rounded'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
             <Link href='/about' className='block text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 p-2 rounded' onClick={() => setIsOpen(false)}>À propos</Link>
             <Link href='/services' className='block text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 p-2 rounded' onClick={() => setIsOpen(false)}>Services</Link>
             <Link href='/events' className='block text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 p-2 rounded' onClick={() => setIsOpen(false)}>Événements</Link>
             <Link href='/members' className='block text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 p-2 rounded' onClick={() => setIsOpen(false)}>Membres</Link>
            <Link
              href='/join'
              className='block w-full text-center px-4 py-2.5 mt-4 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200'
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