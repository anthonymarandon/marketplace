import { Component } from "@/types/components";
import Header2 from "./header.react/header2";

export const componentHeader2: Component = {
  id: 'header2',
  name: 'Header 2',
  description: 'Client Component',
  category: 'header',
  component: Header2,
  code: `'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='bg-gray-900 text-white font-sans'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-4'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <h1 className='text-2xl font-bold text-teal-400'>
              SocietyName
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500'
            >
              <div className="space-y-1.5">
                <span className={\`block w-5 h-0.5 bg-gray-300 transition-transform \${isOpen ? 'rotate-45 translate-y-2' : ''}\`}></span>
                <span className={\`block w-5 h-0.5 bg-gray-300 transition-opacity \${isOpen ? 'opacity-0' : ''}\`}></span>
                <span className={\`block w-5 h-0.5 bg-gray-300 transition-transform \${isOpen ? '-rotate-45 -translate-y-2' : ''}\`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:items-center lg:space-x-6'>
            <Link
              href='/'
              className='text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              Services
            </Link>
            <Link
              href='/events'
              className='text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='px-4 py-2 ml-4 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors duration-200 shadow-sm hover:shadow-md'
            >
              Rejoignez-nous
            </Link>
          </nav>
        </header>
      </div>

      <div className={\`lg:hidden \${isOpen ? 'block' : 'hidden'} bg-gray-800 border-t border-gray-700\`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 space-y-4">
            <Link
              href='/'
              className='block text-base font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='block text-base font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='block text-base font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/events'
              className='block text-base font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='block text-base font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200'
              onClick={() => setIsOpen(false)}
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='block w-full text-center px-4 py-2 mt-4 text-base font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-200'
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