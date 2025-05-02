import { Component } from '@/types/components';
import About1 from './about.react/about1';

export const componentAbout1: Component = {
  id: 'about1',
  name: 'About 1',
  description: 'Server Component',
  category: 'about',
  component: About1,
  code: `import { IoDocumentTextOutline, IoTimeOutline, IoBriefcaseOutline, IoPeopleOutline, IoStarOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function About1() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-white shadow-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
               <IoDocumentTextOutline className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className='text-xl text-gray-900 font-semibold'>À Propos de Nous</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Nous sommes une équipe dévouée, passionnée par la création de solutions innovantes qui transforment les entreprises.
            </p>
          </div>

          <div className='bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <IoTimeOutline className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className='text-xl text-gray-900 font-semibold'>Notre Histoire</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Fondée en 2010, nous sommes passés d'une petite startup à un leader de l'industrie avec une portée mondiale.
            </p>
          </div>

          <div className='bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <IoBriefcaseOutline className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className='text-xl text-gray-900 font-semibold'>Notre Mission</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Notre objectif est de renforcer les entreprises grâce à la technologie et de créer un impact significatif dans chaque projet.
            </p>
          </div>

          <div className='bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-2 text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
               <IoPeopleOutline className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className='text-xl text-gray-900 font-semibold'>Notre Équipe</h3>
            </div>
            <p className='text-gray-600 mb-4'>
              Un groupe diversifié de professionnels apportant des compétences et des perspectives uniques pour fournir des résultats exceptionnels.
            </p>
            <div className='flex space-x-4 mt-4 justify-center md:justify-start'>
              <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-purple-300 hover:scale-110 transition-transform cursor-pointer'>
                <span className='text-purple-600 font-bold'>JD</span>
              </div>
              <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-purple-300 hover:scale-110 transition-transform cursor-pointer'>
                <span className='text-purple-600 font-bold'>AL</span>
              </div>
              <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-purple-300 hover:scale-110 transition-transform cursor-pointer'>
                <span className='text-purple-600 font-bold'>MK</span>
              </div>
              <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-purple-300 hover:scale-110 transition-transform cursor-pointer'>
                <span className='text-purple-600 font-bold'>TS</span>
              </div>
            </div>
          </div>

          <div className='bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center md:text-left'>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <IoStarOutline className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className='text-xl text-gray-900 font-semibold'>Nos Réalisations</h3>
            </div>
            <ul className='text-gray-600 space-y-2 mb-4'>
              <li className='flex items-center justify-center md:justify-start'>
                <IoCheckmarkCircleOutline className="w-5 h-5 text-purple-500 mr-2" />
                15+ Prix de l'industrie
              </li>
              <li className='flex items-center justify-center md:justify-start'>
                <IoCheckmarkCircleOutline className="w-5 h-5 text-purple-500 mr-2" />
                200+ Projets réussis
              </li>
              <li className='flex items-center justify-center md:justify-start'>
                <IoCheckmarkCircleOutline className="w-5 h-5 text-purple-500 mr-2" />
                50+ Partenariats mondiaux
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10 text-center'></div>
      </div>
    </div>
  );
};
`
}

