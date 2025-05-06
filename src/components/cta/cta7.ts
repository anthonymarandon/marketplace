import { Component } from '@/types/components';
import CTA7 from './cta.react/cta7';

export const componentCTA7: Component = {
  id: 'cta7',
  name: 'CTA 7',
  description: 'Server Component',
  category: 'cta',
  component: CTA7,
  code: `import { FiFeather, FiSmile, FiHeart, FiSend, FiInfo } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

export default function CTA7() {
  const illustrationUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'; 

  return (
    <div className="bg-rose-50 p-8 md:p-16 max-w-6xl mx-auto font-sans overflow-hidden">
      <div className="flex flex-col md:flex-row gap-10 items-center">

        <div className="md:w-3/5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white text-rose-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm mb-4 border border-rose-100">
             <FiHeart className="w-4 h-4" />
            <span>Créé avec Amour</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Libérez Votre <br />
            <span className="text-rose-500">Créativité Sans Limites</span>
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Des outils conçus pour inspirer et simplifier votre processus créatif. Donnez vie à vos visions avec facilité et élégance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-7 rounded-full flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow hover:shadow-md">
              Commencer à Créer <FiSend />
            </button>
            <button className="bg-white hover:bg-rose-100/50 text-rose-500 font-semibold py-3 px-7 rounded-full flex items-center justify-center gap-2 transition duration-300 ease-in-out border border-rose-200 shadow-sm">
              Galerie d'Inspiration <FiInfo />
            </button>
          </div>
        </div>

        <div className="md:w-2/5 relative flex justify-center items-center mt-8 md:mt-0">
           <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-200 to-fuchsia-200 rounded-full blur-3xl opacity-30"></div>
          <img
            src={illustrationUrl}
            alt="Illustration ou photo créative et douce"
            className="rounded-full shadow-lg object-cover w-64 h-64 md:w-80 md:h-80 border-8 border-white relative z-10"
           />
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-md z-20 animate-pulse">
                <FiFeather className="text-rose-400 text-2xl" />
            </div>
            <div className="absolute -bottom-6 -right-2 bg-white p-4 rounded-full shadow-md z-20 animate-bounce delay-500">
                <FaPalette className="text-fuchsia-400 text-3xl"/>
            </div>
             <div className="absolute top-1/2 -right-8 bg-white p-2 rounded-full shadow-md z-20">
                <FiSmile className="text-yellow-400 text-xl"/>
            </div>
        </div>

      </div>
    </div>
  );
}
`
}