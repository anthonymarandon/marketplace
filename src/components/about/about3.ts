import { Component } from '@/types/components';
import About3 from './about.react/about3';
export const componentAbout3: Component = {
  id: 'about3',
  name: 'About 3',
  description: 'Server Component',
  category: 'about',
  component: About3,
  code: `import { IoInformationCircleOutline, IoRocketOutline, IoBulbOutline, IoHeartOutline, IoPeopleOutline, IoTrophyOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function About3() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-gray-100'>
        <div className='max-w-7xl mx-auto'>

          <div className='bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8 md:mb-12 text-center border border-gray-200'>
            <IoInformationCircleOutline className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Au Coeur de Notre Identité</h2>
            <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Nous sommes bien plus qu'une agence : un collectif de penseurs, créateurs et stratèges dédiés à l'excellence digitale. Notre passion est de transformer vos idées en succès mesurables.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoRocketOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Mission</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Propulser nos clients vers l'avenir grâce à des stratégies digitales innovantes et des solutions technologiques sur mesure.
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoBulbOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Vision</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Devenir le partenaire incontournable pour la transformation digitale, reconnu pour notre impact positif et durable.
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoHeartOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Nos Valeurs</h3>
              </div>
              <ul className='text-gray-600 space-y-2 mb-4'>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Intégrité</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Collaboration</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Innovation</li>
              </ul>
            </div>

            <div className='bg-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-200 md:col-span-2 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                 <IoPeopleOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Équipe</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Des talents diversifiés unis par une passion commune pour la création de valeur et la résolution de défis complexes.
              </p>
              <div className='flex space-x-4 mt-4 justify-center md:justify-start'>
                <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>P1</span>
                </div>
                 <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>P2</span>
                </div>
                 <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>P3</span>
                </div>
                 <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>+</span>
                </div>
              </div>
            </div>

            <div className='bg-teal-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoTrophyOutline className="w-8 h-8 text-yellow-300 mr-3 flex-shrink-0" />
                <h3 className='text-xl font-semibold'>Nos Succès</h3>
              </div>
              <ul className='space-y-2 mb-4'>
                <li className='flex items-center justify-center md:justify-start'>
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                  +10 ans d'expérience
                </li>
                <li className='flex items-center justify-center md:justify-start'>
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                  Clients dans 15 pays
                </li>
                <li className='flex items-center justify-center md:justify-start'>
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                  95% de projets livrés à temps
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};`
}

