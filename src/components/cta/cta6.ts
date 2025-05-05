import { Component } from '@/types/components';
import CTA6 from './cta.react/cta6';

export const componentCTA6: Component = {
  id: 'cta6',
  name: 'CTA 6',
  description: 'Server Component',
  category: 'cta',
  component: CTA6,
  code: `import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function CTA6() {
  const imageUrl = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl max-w-6xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row gap-8 items-stretch"> 

        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left py-4">
           <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
             Moins de complexité, <br /> plus <span className="text-gray-500">d'impact</span>.
           </h1>
           <p className="mt-4 text-gray-600">
             Notre approche épurée vous aide à vous concentrer sur l'essentiel pour obtenir des résultats tangibles.
           </p>

          <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left mx-auto md:mx-0 max-w-xs">
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 w-4 h-4 flex-shrink-0" />
              <span>Configuration rapide</span>
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 w-4 h-4 flex-shrink-0" />
              <span>Design intuitif</span>
            </li>
             <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 w-4 h-4 flex-shrink-0" />
              <span>Performances optimisées</span>
            </li>
          </ul>

           <div className="mt-8 flex gap-3 justify-center md:justify-start">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2.5 px-6 rounded-md flex items-center gap-1.5 transition duration-300 text-sm">
              Commencer <FiArrowRight className="w-4 h-4"/>
            </button>
             <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-6 rounded-md transition duration-300 text-sm">
              Détails
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Personne utilisant un ordinateur portable dans un espace minimaliste"
            className="rounded-lg object-cover w-full h-full max-h-96 md:max-h-full shadow-sm"
           />
        </div>

      </div>
    </div>
  );
}
`
}