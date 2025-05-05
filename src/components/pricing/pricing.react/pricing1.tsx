import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function Pricing1() {
  return (
    <div id='pricing' className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className='w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-200'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-semibold text-gray-900 mb-2'>Forfait Premium</h2>
          <p className='text-gray-500'>Parfait pour les entreprises en croissance</p>
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
          Commencer maintenant
        </button>
      </div>
    </div>
  );
}   