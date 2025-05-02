import { IoBuildOutline, IoBusinessOutline, IoHandRightOutline, IoChatbubblesOutline, IoPeopleOutline, IoCheckmarkCircleOutline, IoBarChartOutline } from 'react-icons/io5';

export default function About9() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-gray-800 text-gray-300'>
        <div className='max-w-7xl mx-auto'>

          <div className='mb-12 md:mb-16 text-center'>
            <IoBarChartOutline className="w-10 h-10 md:w-12 md:h-12 text-green-400 mx-auto mb-3 md:mb-4" />
            <h2 className='text-2xl md:text-3xl font-bold text-white sm:text-4xl'>
              Transformer les Défis en Résultats
            </h2>
            <p className='mt-3 text-base md:text-lg text-gray-400 max-w-2xl mx-auto'>
              Notre expertise au service de votre croissance et de votre performance.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16'>

            <div className='bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-green-500 transition-colors duration-300 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoBuildOutline className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-white font-semibold'>Solutions Sur Mesure</h3>
              </div>
              <p className='text-gray-400 text-sm'>
                Nous concevons des solutions parfaitement adaptées à vos objectifs spécifiques et à votre contexte métier.
              </p>
            </div>

            <div className='bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-green-500 transition-colors duration-300 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoBusinessOutline className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-white font-semibold'>Expertise Sectorielle</h3>
              </div>
              <p className='text-gray-400 text-sm'>
                Notre connaissance approfondie de divers secteurs nous permet d'apporter une valeur ajoutée pertinente.
              </p>
            </div>

            <div className='bg-gray-700 rounded-xl p-6 border border-gray-600 hover:border-green-500 transition-colors duration-300 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoHandRightOutline className="w-8 h-8 text-green-400 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-white font-semibold'>Partenariat Stratégique</h3>
              </div>
              <p className='text-gray-400 text-sm'>
                Nous allons au-delà de la simple prestation pour devenir un véritable partenaire de votre succès.
              </p>
            </div>
          </div>

          <div className='bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl p-6 md:p-8 shadow-lg text-center relative overflow-hidden'>
            <IoChatbubblesOutline className="w-12 h-12 md:w-16 md:h-16 absolute -top-3 -left-3 md:-top-4 md:-left-4 text-white opacity-10" />
            <IoPeopleOutline className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4" />
            <h3 className='text-xl md:text-2xl font-bold mb-3 md:mb-4'>Le Succès de Nos Clients : Notre Meilleure Référence</h3>
            <blockquote className='italic text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4 md:mb-5'>
              "Leur approche personnalisée et leur expertise technique ont été cruciales pour la refonte de notre plateforme. Les résultats dépassent nos attentes."
            </blockquote>
            <p className='font-semibold text-xs md:text-sm uppercase tracking-wider'>- Directeur Digital, Entreprise X</p>
             <div className='mt-4 md:mt-5 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs font-medium'>
              <span className='flex items-center'><IoCheckmarkCircleOutline className="w-4 h-4 mr-1 opacity-80"/> +40% Conversion</span>
              <span className='flex items-center'><IoCheckmarkCircleOutline className="w-4 h-4 mr-1 opacity-80"/> -25% Coûts Opérationnels</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};