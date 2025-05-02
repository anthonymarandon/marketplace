import { Component } from '@/types/components';
import About2 from './about.react/about2';

export const componentAbout2: Component = {
  id: 'about2',
  name: 'About 2',
  description: 'Server Component',
  category: 'about',
  component: About2,
  code: `import { IoInformationCircleOutline, IoCalendarOutline, IoRocketOutline, IoPeopleCircleOutline, IoTrophyOutline, IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

export default function About2() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          <div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 ease-in-out text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
               <IoInformationCircleOutline className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" />
              <h3 className='text-xl text-gray-800 font-semibold'>Qui Sommes-Nous ?</h3>
            </div>
            <p className='text-gray-600 leading-relaxed mb-4'>
              Experts en innovation digitale, nous propulsons votre entreprise vers de nouveaux sommets avec des solutions sur mesure.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 ease-in-out text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <IoCalendarOutline className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" />
              <h3 className='text-xl text-gray-800 font-semibold'>Notre Parcours</h3>
            </div>
            <p className='text-gray-600 leading-relaxed mb-4'>
              Depuis notre création en 2010, nous avons évolué pour devenir un acteur clé de la transformation numérique à l'échelle internationale.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 ease-in-out text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <IoRocketOutline className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" />
              <h3 className='text-xl text-gray-800 font-semibold'>Notre Vision</h3>
            </div>
            <p className='text-gray-600 leading-relaxed mb-4'>
              Révolutionner les industries par la technologie, en apportant une valeur ajoutée tangible à chaque collaboration.
            </p>
          </div>

          <div className='bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 ease-in-out md:col-span-2 text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
               <IoPeopleCircleOutline className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" />
              <h3 className='text-xl text-gray-800 font-semibold'>L'Équipe</h3>
            </div>
            <p className='text-gray-600 mb-4 leading-relaxed'>
              Notre force réside dans la diversité de nos talents. Des experts passionnés unis pour garantir votre succès.
            </p>
            
            <div className='flex space-x-4 justify-center md:justify-start'>
              <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-300 ring-offset-2 hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105'>
                 <span className='text-blue-700 text-xl font-semibold'>EX1</span>
              </div>
               <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-300 ring-offset-2 hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105'>
                 <span className='text-blue-700 text-xl font-semibold'>EX2</span>
              </div>
               <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-300 ring-offset-2 hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105'>
                 <span className='text-blue-700 text-xl font-semibold'>EX3</span>
              </div>
               <div className='w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-300 ring-offset-2 hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105'>
                 <span className='text-blue-700 text-xl font-semibold'>EX4</span>
              </div>
            </div>
          </div>

          <div className='bg-blue-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <IoTrophyOutline className="w-8 h-8 text-yellow-300 mr-3 flex-shrink-0" />
              <h3 className='text-xl font-semibold'>Nos Succès</h3>
            </div>
            <ul className='space-y-2'>
              <li className='flex items-center justify-center md:justify-start'>
                <IoCheckmarkDoneCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                Plus de 15 distinctions majeures
              </li>
              <li className='flex items-center justify-center md:justify-start'>
                <IoCheckmarkDoneCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                Portfolio de 200+ projets innovants
              </li>
              <li className='flex items-center justify-center md:justify-start'>
                <IoCheckmarkDoneCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                Réseau de 50+ partenaires stratégiques
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
`
}