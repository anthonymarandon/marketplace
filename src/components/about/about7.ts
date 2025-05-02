import { Component } from '@/types/components';
import About7 from './about.react/about7';
export const componentAbout7: Component = {
  id: 'about7',
  name: 'About 7',
  description: 'Server Component',
  category: 'about',
  component: About7,
  code: `import { IoShieldCheckmarkOutline, IoPersonAddOutline, IoBulbOutline, IoTrendingUpOutline, IoHeartOutline, IoPeopleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function About7() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-white'>
        <div className='max-w-7xl mx-auto'>

          <div className='mb-12 md:mb-16 text-center'>
            <IoShieldCheckmarkOutline className="w-10 h-10 md:w-12 md:h-12 text-orange-600 mx-auto mb-3 md:mb-4" />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 sm:text-4xl'>
              Pourquoi Nous Choisir ?
            </h2>
            <p className='mt-3 text-base md:text-lg text-gray-500 max-w-2xl mx-auto'>
              Votre succès est notre priorité. Découvrez ce qui nous rend uniques.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16'>

            <div className='bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 flex flex-col text-center md:flex-row md:text-left items-center md:items-start space-y-4 md:space-y-0 md:space-x-4'>
              <IoPeopleOutline className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className='text-xl text-gray-900 font-semibold mb-2'>Expertise Pointue</h3>
                <p className='text-gray-600'>
                  Une équipe de spécialistes chevronnés maîtrisant les dernières technologies et stratégies digitales.
                </p>
              </div>
            </div>

            <div className='bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 flex flex-col text-center md:flex-row md:text-left items-center md:items-start space-y-4 md:space-y-0 md:space-x-4'>
              <IoPersonAddOutline className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className='text-xl text-gray-900 font-semibold mb-2'>Approche Personnalisée</h3>
                <p className='text-gray-600'>
                  Nous prenons le temps de comprendre vos besoins uniques pour créer des solutions véritablement sur mesure.
                </p>
              </div>
            </div>

            <div className='bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 flex flex-col text-center md:flex-row md:text-left items-center md:items-start space-y-4 md:space-y-0 md:space-x-4'>
              <IoBulbOutline className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className='text-xl text-gray-900 font-semibold mb-2'>Innovation Garantie</h3>
                <p className='text-gray-600'>
                  Nous sommes constamment à la recherche de nouvelles idées et technologies pour vous donner une longueur d'avance.
                </p>
              </div>
            </div>

            <div className='bg-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 flex flex-col text-center md:flex-row md:text-left items-center md:items-start space-y-4 md:space-y-0 md:space-x-4'>
              <IoTrendingUpOutline className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className='text-xl text-gray-900 font-semibold mb-2'>Résultats Mesurables</h3>
                <p className='text-gray-600'>
                  Notre objectif est de générer un impact tangible et quantifiable sur votre croissance et votre performance.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl p-6 md:p-8 shadow-lg text-center'>
            <IoHeartOutline className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4" />
            <h3 className='text-xl md:text-2xl font-bold mb-3 md:mb-4'>Notre Promesse</h3>
            <p className='leading-relaxed max-w-3xl mx-auto mb-5 md:mb-6 text-sm md:text-base'>
              Nous nous engageons à être plus qu'un simple fournisseur : un véritable partenaire stratégique investi dans votre réussite à long terme. Votre vision devient notre mission.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm font-medium'>
              <span className='flex items-center'><IoCheckmarkCircleOutline className="w-5 h-5 mr-2 opacity-80"/> Transparence Totale</span>
              <span className='flex items-center'><IoCheckmarkCircleOutline className="w-5 h-5 mr-2 opacity-80"/> Support Dédié</span>
              <span className='flex items-center'><IoCheckmarkCircleOutline className="w-5 h-5 mr-2 opacity-80"/> Qualité Supérieure</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};`
}