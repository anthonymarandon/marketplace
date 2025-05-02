import { IoSparklesOutline, IoPeopleCircleOutline, IoHandLeftOutline, IoColorPaletteOutline, IoSyncCircleOutline, IoHeartOutline, IoStarOutline, IoLockClosedOutline } from 'react-icons/io5';

export default function About8() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-gray-100'>
        <div className='max-w-7xl mx-auto'>

          <div className='mb-12 md:mb-16 text-center'>
            <IoSparklesOutline className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 sm:text-4xl'>
              Notre Culture : Collaboration & Innovation
            </h2>
            <p className='mt-3 text-base md:text-lg text-gray-500 max-w-2xl mx-auto'>
              Un environnement où les idées fleurissent et où le travail d'équipe mène au succès.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16 items-stretch'>

            <div className='lg:col-span-3 bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200'>
              <h3 className='text-xl md:text-2xl font-semibold text-gray-800 mb-5 md:mb-6 text-center lg:text-left'>Nos Valeurs Fondamentales</h3>
              <div className='space-y-6'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
                  <IoLockClosedOutline className="w-8 h-8 text-blue-600 mr-0 sm:mr-4 mb-2 sm:mb-0 flex-shrink-0" />
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>Intégrité</h4>
                    <p className='text-gray-600 text-sm'>Agir avec honnêteté et transparence dans toutes nos interactions.</p>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
                  <IoHeartOutline className="w-8 h-8 text-blue-600 mr-0 sm:mr-4 mb-2 sm:mb-0 flex-shrink-0" />
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>Passion</h4>
                    <p className='text-gray-600 text-sm'>Mettre notre cœur et notre énergie dans chaque projet que nous entreprenons.</p>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left'>
                  <IoStarOutline className="w-8 h-8 text-blue-600 mr-0 sm:mr-4 mb-2 sm:mb-0 flex-shrink-0" />
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 mb-1'>Excellence</h4>
                    <p className='text-gray-600 text-sm'>Viser la plus haute qualité et dépasser les attentes de nos clients.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-2 bg-blue-50 rounded-xl p-6 md:p-8 shadow-md border border-blue-200 flex flex-col justify-center items-center text-center'>
              <IoPeopleCircleOutline className="w-8 h-8 md:w-10 md:h-10 text-blue-700 mb-3 md:mb-4" />
              <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4'>Notre Équipe Unie</h3>
              <p className='text-gray-700 mb-5 md:mb-6'>
                Des talents complémentaires qui collaborent étroitement pour innover et réussir.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-200 flex items-center justify-center border-2 border-blue-300 ring-1 ring-blue-100 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-blue-800 font-bold text-sm md:text-base'>E1</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-200 flex items-center justify-center border-2 border-blue-300 ring-1 ring-blue-100 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-blue-800 font-bold text-sm md:text-base'>E2</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-200 flex items-center justify-center border-2 border-blue-300 ring-1 ring-blue-100 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-blue-800 font-bold text-sm md:text-base'>E3</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-200 flex items-center justify-center border-2 border-blue-300 ring-1 ring-blue-100 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-blue-800 font-bold text-sm md:text-base'>E4</span>
                </div>
                 <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-200 flex items-center justify-center border-2 border-blue-300 ring-1 ring-blue-100 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-blue-800 font-bold text-sm md:text-base'>+</span>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-blue-600 text-white rounded-xl p-6 md:p-8 shadow-lg'>
             <h3 className='text-xl md:text-2xl font-bold text-center mb-5 md:mb-6'>Notre Méthode Collaborative</h3>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center'>
                <div>
                  <IoHandLeftOutline className="w-8 h-8 mx-auto mb-2 md:mb-3 text-yellow-300" />
                  <h4 className='font-semibold mb-1'>Co-création</h4>
                  <p className='text-sm opacity-90'>Nous travaillons main dans la main avec vous.</p>
                </div>
                <div>
                  <IoColorPaletteOutline className="w-8 h-8 mx-auto mb-2 md:mb-3 text-yellow-300" />
                  <h4 className='font-semibold mb-1'>Flexibilité</h4>
                  <p className='text-sm opacity-90'>Nous nous adaptons à vos processus et besoins.</p>
                </div>
                <div>
                  <IoSyncCircleOutline className="w-8 h-8 mx-auto mb-2 md:mb-3 text-yellow-300" />
                  <h4 className='font-semibold mb-1'>Communication</h4>
                  <p className='text-sm opacity-90'>Des échanges fluides et réguliers pour un projet réussi.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};