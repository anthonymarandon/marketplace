import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl relative overflow-hidden py-6">
      {/* Decorative SVGs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        {/* Bag Icon 1 */}
        <svg className="absolute top-1/4 left-1/5 w-16 h-16 text-white transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        {/* Cart Icon 1 */}
        <svg className="absolute bottom-1/4 right-1/4 w-20 h-20 text-white transform rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
         {/* Bag Icon 2 */}
        <svg className="absolute top-10 right-10 w-12 h-12 text-white transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        {/* Cart Icon 2 */}
        <svg className="absolute bottom-5 left-10 w-14 h-14 text-white transform -rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {/* Add more icons as needed */}
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
        {/* Title - More prominent */}
        <h1 className="text-lg sm:text-2xl font-extrabold italic text-center tracking-tight text-white drop-shadow-md">
          Bienvenue sur le Marketplace de Webazon
        </h1>
      </div>
    </header>
  );
}

