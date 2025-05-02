import { Component } from '@/types/components';
import About4 from './about.react/about4';
export const componentAbout4: Component = {
  id: 'about4',
  name: 'About 4',
  description: 'Server Component',
  category: 'about',
  component: About4,
  code: `import { IoStatsChartOutline, IoSparklesOutline, IoCalendarOutline, IoRibbonOutline, IoBuildOutline, IoPeopleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function About4() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-white'>
        <div className='max-w-7xl mx-auto'>

          <div className='text-center mb-8 md:mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 sm:text-4xl'>
              Notre Impact, Votre Succès
            </h2>
            <p className='mt-3 text-base md:text-lg text-gray-500'>
              Construire l'avenir du digital, ensemble.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-16'>
            <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300'>
              <IoStatsChartOutline className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <p className='text-2xl font-semibold text-green-800'>+95%</p>
              <p className='text-sm text-green-700'>Satisfaction Client</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300'>
              <IoCalendarOutline className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <p className='text-2xl font-semibold text-green-800'>10+ ans</p>
              <p className='text-sm text-green-700'>D'Expérience</p>
            </div>
            <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300'>
              <IoSparklesOutline className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <p className='text-2xl font-semibold text-green-800'>200+</p>
              <p className='text-sm text-green-700'>Projets Innovants</p>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

            <div className='lg:col-span-2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoRibbonOutline className="w-8 h-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Parcours Inspirant</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Depuis nos débuts modestes, nous avons tracé une voie d'innovation constante. Chaque étape a été marquée par notre engagement à repousser les limites technologiques et à créer une valeur tangible pour nos partenaires. Notre histoire est celle d'une passion pour la transformation digitale.
              </p>
              <p className='text-gray-600 mb-4'>
                Aujourd'hui, nous sommes fiers de notre héritage et tournés vers l'avenir, prêts à relever de nouveaux défis.
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoBuildOutline className="w-8 h-8 text-green-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Engagement</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Fournir des solutions d'excellence, axées sur les résultats, avec une approche collaborative et transparente.
              </p>
              <ul className='text-gray-600 space-y-2 mb-4'>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"/> Qualité</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"/> Partenariat</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"/> Impact</li>
              </ul>
            </div>

            <div className='lg:col-span-3 bg-green-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-200 mt-8'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='text-center md:text-left'>
                  <div className='flex items-center mb-4 justify-center md:justify-start'>
                    <IoPeopleOutline className="w-8 h-8 text-green-700 mr-3 flex-shrink-0" />
                    <h3 className='text-xl text-gray-900 font-semibold'>Notre Expertise Collective</h3>
                  </div>
                  <p className='text-gray-700 mb-4 md:mb-0 md:max-w-md'>
                    Une équipe multidisciplinaire d'experts passionnés, prêts à transformer vos défis en opportunités.
                  </p>
                </div>
                <div className='flex space-x-4 justify-center md:justify-start mt-4 md:mt-0'>
                  <div className='w-12 h-12 rounded-full bg-green-300 flex items-center justify-center border-2 border-green-400 hover:scale-110 transition-transform cursor-pointer'>
                    <span className='text-green-800 font-bold'>S1</span>
                  </div>
                  <div className='w-12 h-12 rounded-full bg-green-300 flex items-center justify-center border-2 border-green-400 hover:scale-110 transition-transform cursor-pointer'>
                    <span className='text-green-800 font-bold'>S2</span>
                  </div>
                  <div className='w-12 h-12 rounded-full bg-green-300 flex items-center justify-center border-2 border-green-400 hover:scale-110 transition-transform cursor-pointer'>
                    <span className='text-green-800 font-bold'>S3</span>
                  </div>
                  <div className='w-12 h-12 rounded-full bg-green-300 flex items-center justify-center border-2 border-green-400 hover:scale-110 transition-transform cursor-pointer'>
                    <span className='text-green-800 font-bold'>...</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};`
}