import { Component } from '@/types/components';
import About10 from './about.react/about10';

export const componentAbout10: Component = {
  id: 'about10',
  name: 'About 10',
  description: 'Server Component',
  category: 'about',
  component: About10,
  code: `import { IoRocketOutline, IoLeafOutline, IoSchoolOutline, IoArrowForwardCircleOutline, IoCodeSlashOutline, IoColorWandOutline, IoPeopleOutline } from 'react-icons/io5';

export default function About10() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-white'>
        <div className='max-w-7xl mx-auto'>

          <div className='mb-10 md:mb-12 text-center'>
             <IoRocketOutline className="w-10 h-10 md:w-12 md:h-12 text-cyan-500 mx-auto mb-3 md:mb-4" />
            <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl'>
              Construire Demain, Aujourd'hui
            </h2>
            <p className='mt-3 md:mt-4 text-base md:text-lg text-gray-600'>
              Notre vision pour un avenir digital innovant et responsable.
            </p>
          </div>

          <div className='relative p-6 md:p-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 text-white shadow-2xl mb-12 md:mb-16 overflow-hidden text-center md:text-left'>
             <IoRocketOutline className="w-16 h-16 md:w-24 md:h-24 absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-white opacity-20 transform rotate-12" />
            <h3 className='text-2xl md:text-3xl font-bold mb-3 md:mb-4 relative z-10'>Notre Vision Future</h3>
            <p className='text-lg md:text-xl leading-relaxed max-w-3xl relative z-10 mx-auto md:mx-0'>
              Pionniers de l'innovation, nous aspirons à créer des solutions technologiques qui non seulement répondent aux défis actuels, mais anticipent et façonnent l'avenir de nos industries et de notre société.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16'>

            <div className='bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoCodeSlashOutline className="w-8 h-8 text-cyan-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Technologies Émergentes</h3>
              </div>
              <p className='text-gray-600 text-sm'>
                Exploration et intégration de l'IA, du Web3 et de l'IoT pour des solutions avant-gardistes.
              </p>
            </div>

            <div className='bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoColorWandOutline className="w-8 h-8 text-cyan-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Expérience Client Réinventée</h3>
              </div>
              <p className='text-gray-600 text-sm'>
                Créer des parcours utilisateurs hyper-personnalisés, intuitifs et engageants.
              </p>
            </div>

            <div className='bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoLeafOutline className="w-8 h-8 text-green-500 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Développement Durable</h3>
              </div>
              <p className='text-gray-600 text-sm'>
                Intégrer des pratiques éco-responsables dans nos solutions et opérations.
              </p>
            </div>

            <div className='bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                 <IoSchoolOutline className="w-8 h-8 text-purple-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Talents & Croissance</h3>
              </div>
              <p className='text-gray-600 text-sm'>
                Investir dans nos équipes et attirer les meilleurs talents pour nourrir notre innovation.
              </p>
            </div>
          </div>

          <div className='text-center'>
            <IoPeopleOutline className="w-8 h-8 md:w-10 md:h-10 text-purple-500 mx-auto mb-3 md:mb-4" />
            <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>Rejoignez l'Aventure</h3>
            <p className='text-gray-600 mb-5 md:mb-6 max-w-lg mx-auto'>
              Que vous soyez un client potentiel ou un futur talent, construisons ensemble l'avenir du digital.
            </p>
            <button className="inline-flex items-center px-5 py-2 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300">
              Contactez-nous
              <IoArrowForwardCircleOutline className="ml-2 md:ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};`
}