import { Component } from "@/types/components";
import Header4 from "./header.react/header4";

export const componentHeader4: Component = {
  id: 'header4',
  name: 'Header 4',
  description: 'Client Component',
  category: 'header',
  component: Header4,
  code: `'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header4() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='header' className='bg-white font-sans border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col lg:flex-row items-center justify-between py-3'>
          <div className='flex items-center justify-between w-full lg:w-auto'>
            <h1 className='text-xl font-semibold text-gray-800'> 
              SocietyName
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400'
            >
              <div className="space-y-1">
                <span className={\`block w-4 h-0.5 bg-gray-600 transition-transform \${isOpen ? 'rotate-45 translate-y-[6px]' : ''}\`}></span>
                <span className={\`block w-4 h-0.5 bg-gray-600 transition-opacity \${isOpen ? 'opacity-0' : ''}\`}></span>
                <span className={\`block w-4 h-0.5 bg-gray-600 transition-transform \${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}\`}></span>
              </div>
            </button>
          </div>

          <nav className='hidden lg:flex lg:items-center lg:space-x-5'>
            <Link
              href='/'
              className='text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-150'
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-150'
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-150'
            >
              Services
            </Link>
            <Link
              href='/events'
              className='text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-150'
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors duration-150'
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='px-4 py-1.5 ml-3 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150'
            >
              Rejoignez-nous
            </Link>
          </nav>
        </header>
      </div>

      <div className={\`lg:hidden \${isOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 shadow-md\`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 space-y-3">
            <Link
              href='/'
              className='block text-base font-normal text-gray-600 hover:bg-gray-50 px-2 py-1 rounded'
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href='/about'
              className='block text-base font-normal text-gray-600 hover:bg-gray-50 px-2 py-1 rounded'
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              href='/services'
              className='block text-base font-normal text-gray-600 hover:bg-gray-50 px-2 py-1 rounded'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href='/events'
              className='block text-base font-normal text-gray-600 hover:bg-gray-50 px-2 py-1 rounded'
              onClick={() => setIsOpen(false)}
            >
              Événements
            </Link>
            <Link
              href='/members'
              className='block text-base font-normal text-gray-600 hover:bg-gray-50 px-2 py-1 rounded'
              onClick={() => setIsOpen(false)}
            >
              Membres
            </Link>
            <Link
              href='/join'
              className='block w-full text-center px-4 py-2 mt-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-150'
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