import { Component } from "@/types/components";
import Pricing1 from "./pricing.react/pricing1";

export const componentPricing1: Component = {
  id: 'pricing1',
  name: 'Pricing 1',
  description: 'Server Component',
  category: 'pricing',
  component: Pricing1,
  code: `import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

export default function Pricing1() {
  return (
    <div id='webcrumbs'>
      <div className='w-[450px] bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
        <div className='flex items-center justify-between mb-6'>
          <div className='text-2xl font-bold text-gray-800'>Plan Premium</div>
          <span className='px-3 py-1 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full'>
            Le Plus Populaire
          </span>
        </div>
        <div className='flex items-end mb-6'>
          <span className='text-5xl font-bold text-gray-900'>29€</span>
          <span className='text-gray-500 ml-2 mb-1'>/mois</span>
        </div>
        <p className='text-gray-600 mb-8'>
          Parfait pour les petites entreprises et les équipes en croissance.
        </p>
        <ul className='space-y-3 mb-8'>
          <li className='flex items-center'>
            <IoCheckmarkCircleOutline className="text-teal-500 w-6 h-6 mr-3" />
            <span>Toutes les fonctionnalités de base</span>
          </li>
          <li className='flex items-center'>
            <IoCheckmarkCircleOutline className="text-teal-500 w-6 h-6 mr-3" />
            <span>Jusqu'à 10 membres d'équipe</span>
          </li>
          <li className='flex items-center'>
            <IoCheckmarkCircleOutline className="text-teal-500 w-6 h-6 mr-3" />
            <span>20GB de stockage cloud</span>
          </li>
          <li className='flex items-center'>
            <IoCheckmarkCircleOutline className="text-teal-500 w-6 h-6 mr-3" />
            <span>Support email prioritaire</span>
          </li>
          <li className='flex items-center text-gray-400'>
            <IoCloseCircleOutline className="text-gray-300 w-6 h-6 mr-3" />
            <span>Analyses avancées</span>
          </li>
        </ul>
        <button className='w-full py-3 bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:transform active:scale-[0.98]'>
          Commencer Maintenant
        </button>
        <p className='text-sm text-center text-gray-500 mt-4'></p>
      </div>
    </div>
  );
}   `
}