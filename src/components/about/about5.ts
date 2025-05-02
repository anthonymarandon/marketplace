import { Component } from '@/types/components';
import About5 from './about.react/about5';

export const componentAbout5: Component = {
  id: 'about5',
  name: 'About 5',
  description: 'Server Component',
  category: 'about',
  component: About5,
  code: `import { IoFlashOutline, IoNavigateCircleOutline, IoCodeSlashOutline, IoAnalyticsOutline, IoEyeOutline, IoPeopleOutline, IoSparklesOutline, IoCheckmarkCircleOutline, IoShieldCheckmarkOutline, IoRocketOutline } from 'react-icons/io5';

export default function About5() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-gradient-to-b from-purple-50 to-white'>
        <div className='max-w-7xl mx-auto'>

          <div className='text-center mb-12 md:mb-16'>
            <IoFlashOutline className="w-12 h-12 md:w-16 md:h-16 text-purple-600 mx-auto mb-4 md:mb-5" />
            <h2 className='text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl mb-3 md:mb-4'>
              Façonner l'Avenir Digital
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
              Votre partenaire stratégique pour une innovation percutante et des résultats durables.
            </p>
          </div>

          <div className='mb-12 md:mb-16'>
            <h3 className='text-xl md:text-2xl font-semibold text-center text-gray-800 mb-8 md:mb-10'>Notre Approche en 4 Étapes</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='relative text-center p-6 bg-white rounded-lg shadow-md border border-purple-100 pt-8'>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <IoNavigateCircleOutline className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>Découverte</h4>
                <p className='text-sm text-gray-600'>Comprendre vos défis et objectifs.</p>
              </div>
              <div className='relative text-center p-6 bg-white rounded-lg shadow-md border border-purple-100 pt-8'>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <IoCodeSlashOutline className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>Stratégie</h4>
                <p className='text-sm text-gray-600'>Concevoir une feuille de route sur mesure.</p>
              </div>
              <div className='relative text-center p-6 bg-white rounded-lg shadow-md border border-purple-100 pt-8'>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <IoRocketOutline className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>Implémentation</h4>
                <p className='text-sm text-gray-600'>Développer et déployer avec agilité.</p>
              </div>
              <div className='relative text-center p-6 bg-white rounded-lg shadow-md border border-purple-100 pt-8'>
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <IoAnalyticsOutline className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>Optimisation</h4>
                <p className='text-sm text-gray-600'>Analyser et améliorer en continu.</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16'>
            <div className='bg-purple-100 rounded-xl p-6 md:p-8 border border-purple-200 text-center lg:text-left'>
              <IoEyeOutline className="w-8 h-8 md:w-10 md:h-10 text-purple-700 mx-auto lg:mx-0 mb-3 md:mb-4" />
              <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>Notre Vision Claire</h3>
              <p className='text-gray-700 leading-relaxed'>
                Être le catalyseur de la transformation digitale, permettant à chaque entreprise d'atteindre son plein potentiel grâce à l'innovation et la technologie.
              </p>
            </div>
            <div className='text-center'>
              <IoPeopleOutline className="w-8 h-8 md:w-10 md:h-10 text-purple-700 mx-auto mb-3 md:mb-4" />
              <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4'>Animée par Notre Équipe</h3>
              <p className='text-gray-600 mb-5 md:mb-6'>Des experts passionnés qui rendent notre vision possible.</p>
              <div className='flex justify-center space-x-4'>
                <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-300 flex items-center justify-center border-2 border-purple-400 ring-2 ring-offset-1 ring-purple-200 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-purple-800 font-bold text-sm md:text-base'>A1</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-300 flex items-center justify-center border-2 border-purple-400 ring-2 ring-offset-1 ring-purple-200 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-purple-800 font-bold text-sm md:text-base'>A2</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-300 flex items-center justify-center border-2 border-purple-400 ring-2 ring-offset-1 ring-purple-200 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-purple-800 font-bold text-sm md:text-base'>A3</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-300 flex items-center justify-center border-2 border-purple-400 ring-2 ring-offset-1 ring-purple-200 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-purple-800 font-bold text-sm md:text-base'>+</span>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-purple-700 text-white rounded-xl p-6 md:p-8 shadow-lg text-center'>
             <IoSparklesOutline className="w-8 h-8 md:w-10 md:h-10 text-yellow-300 mx-auto mb-3 md:mb-4" />
             <h3 className='text-xl md:text-2xl font-bold mb-4 md:mb-5'>Ce Qui Nous Distingue</h3>
             <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
                <div className='flex items-center justify-center space-x-2'>
                   <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 flex-shrink-0"/>
                   <span>Innovation Continue</span>
                </div>
                 <div className='flex items-center justify-center space-x-2'>
                   <IoShieldCheckmarkOutline className="w-5 h-5 text-yellow-300 flex-shrink-0"/>
                   <span>Résultats Prouvés</span>
                </div>
                 <div className='flex items-center justify-center space-x-2'>
                   <IoPeopleOutline className="w-5 h-5 text-yellow-300 flex-shrink-0"/>
                   <span>Partenariat Solide</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};`
}