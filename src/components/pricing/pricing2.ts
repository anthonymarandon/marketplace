import { Component } from "@/types/components";
import Pricing2 from "./pricing.react/pricing2";

export const componentPricing2: Component = {
  id: 'pricing2',
  name: 'Pricing 2',
  description: 'Server Component',
  category: 'pricing',
  component: Pricing2,
  code: `import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

export default function Pricing2() {
  return (
    <div id='pricing' className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-50 p-4 gap-8">
      <div className='w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-200'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-2'>Forfait Gratuit</h2>
          <p className='text-gray-500'>Idéal pour démarrer</p>
        </div>

        <div className='flex items-end justify-center mb-8'>
          <span className='text-5xl font-bold text-gray-900'>0€</span>
          <span className='text-gray-500 ml-2 mb-1'>/mois</span>
        </div>

        <hr className="border-gray-200 mb-8" />

        <ul className='space-y-4 mb-10'>
          <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-green-500 w-6 h-6 mr-3 flex-shrink-0" />
            <span>1 Projet</span>
          </li>
          <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-green-500 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Support communautaire</span>
          </li>
          <li className='flex items-center text-gray-500 line-through'>
            <IoCloseCircleOutline className="text-red-400 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Analyses de base</span>
          </li>
           <li className='flex items-center text-gray-500 line-through'>
            <IoCloseCircleOutline className="text-red-400 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Custom domain</span>
          </li>
          <li className='flex items-center text-gray-500 line-through'>
            <IoCloseCircleOutline className="text-red-400 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Team collaboration tools</span>
          </li>
        </ul>

        <button className='w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:bg-gray-300 active:transform active:scale-[0.98]'>
          Commencer gratuitement
        </button>
      </div>

      {/* Carte Pro (similaire à Premium de pricing1) */}
      <div className='w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-600 relative overflow-hidden'>
        <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Populaire</span>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-2'>Forfait Pro</h2>
          <p className='text-gray-500'>Parfait pour les entreprises</p>
        </div>

        <div className='flex items-end justify-center mb-8'>
          <span className='text-5xl font-bold text-gray-900'>49€</span>
          <span className='text-gray-500 ml-2 mb-1'>/mois</span>
        </div>

        <hr className="border-gray-200 mb-8" />

        <ul className='space-y-4 mb-10'>
           <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-purple-600 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Projets illimités</span>
          </li>
          <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-purple-600 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Support client 24/7</span>
          </li>
          <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-purple-600 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Analyses avancées</span>
          </li>
          <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-purple-600 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Custom domain</span>
          </li>
          <li className='flex items-center text-gray-700'>
            <IoCheckmarkCircleOutline className="text-purple-600 w-6 h-6 mr-3 flex-shrink-0" />
            <span>Team collaboration tools</span>
          </li>
        </ul>

        <button className='w-full py-3 bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-purple-700 hover:shadow-md active:transform active:scale-[0.98]'>
          Choisir Pro
        </button>
      </div>
    </div>
  );
}
`
};