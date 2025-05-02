import { Component } from '@/types/components';
import About6 from './about.react/about6';

export const componentAbout6: Component = {
  id: 'about6',
  name: 'About 6',
  description: 'Server Component',
  category: 'about',
  component: About6,
  code: `import { IoBusinessOutline, IoFlagOutline, IoTrendingUpOutline, IoRibbonOutline, IoCodeWorkingOutline, IoHeartOutline, IoAnalyticsOutline, IoCheckmarkCircleOutline, IoPeopleOutline } from 'react-icons/io5';

export default function About6() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>

          <div className='mb-12 md:mb-16 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 sm:text-4xl'>
              Notre Parcours, Votre Avantage
            </h2>
            <p className='mt-3 text-base md:text-lg text-gray-500'>
              De la vision à la réalisation, une histoire d'innovation.
            </p>
          </div>

          <div className='mb-12 md:mb-16'>
            <div className="relative border-l-4 border-teal-500 pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-[46px] top-1/2 -translate-y-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-gray-50"></div>
                <div className='bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200'>
                  <div className='flex items-center mb-2 flex-col sm:flex-row text-center sm:text-left'>
                    <IoBusinessOutline className="w-6 h-6 text-teal-600 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0" />
                    <h4 className='text-lg font-semibold text-gray-800'>2010 - Fondation</h4>
                  </div>
                  <p className='text-sm text-gray-600 sm:ml-9 text-center sm:text-left'>Début de l'aventure avec une vision claire : innover.</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[46px] top-1/2 -translate-y-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-gray-50"></div>
                <div className='bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200'>
                  <div className='flex items-center mb-2 flex-col sm:flex-row text-center sm:text-left'>
                    <IoFlagOutline className="w-6 h-6 text-teal-600 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0" />
                    <h4 className='text-lg font-semibold text-gray-800'>2015 - Premier Succès Majeur</h4>
                  </div>
                  <p className='text-sm text-gray-600 sm:ml-9 text-center sm:text-left'>Lancement d'un projet transformateur pour un client clé.</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[46px] top-1/2 -translate-y-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-gray-50"></div>
                <div className='bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200'>
                  <div className='flex items-center mb-2 flex-col sm:flex-row text-center sm:text-left'>
                    <IoTrendingUpOutline className="w-6 h-6 text-teal-600 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0" />
                    <h4 className='text-lg font-semibold text-gray-800'>2018 - Expansion</h4>
                  </div>
                  <p className='text-sm text-gray-600 sm:ml-9 text-center sm:text-left'>Ouverture de nouveaux marchés et croissance de l'équipe.</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[46px] top-1/2 -translate-y-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-gray-50"></div>
                <div className='bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200'>
                  <div className='flex items-center mb-2 flex-col sm:flex-row text-center sm:text-left'>
                    <IoRibbonOutline className="w-6 h-6 text-teal-600 mr-0 sm:mr-3 mb-2 sm:mb-0 flex-shrink-0" />
                    <h4 className='text-lg font-semibold text-gray-800'>Aujourd'hui - Leader Reconnu</h4>
                  </div>
                  <p className='text-sm text-gray-600 sm:ml-9 text-center sm:text-left'>Partenaire de confiance pour la transformation digitale.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoCodeWorkingOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Expertise</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Des compétences pointues en développement, stratégie et design pour des solutions complètes.
              </p>
              <div className='flex items-center text-sm text-gray-500 justify-center md:justify-start'>
                  <IoPeopleOutline className="w-4 h-4 mr-2 flex-shrink-0"/>
                  <span>+50 experts dédiés</span>
               </div>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoHeartOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Nos Valeurs</h3>
              </div>
              <ul className='text-gray-600 space-y-2 mb-4'>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Client d'abord</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Excellence</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Transparence</li>
              </ul>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoAnalyticsOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Impact</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Des résultats mesurables qui accélèrent la croissance et l'innovation de nos clients.
              </p>
              <ul className='text-gray-600 space-y-2 mb-4'>
                 <li className='flex items-center text-sm justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> +30% Efficacité Opérationnelle (moy.)</li>
                 <li className='flex items-center text-sm justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Lancement de 50+ produits digitaux</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};`
}