import { Component } from '@/types/components';
import CTA4 from './cta.react/cta4';

export const componentCTA4: Component = {
  id: 'cta4',
  name: 'CTA 4',
  description: 'Server Component',
  category: 'cta',
  component: CTA4,
  code: `import { FaMobileAlt, FaLaptopCode, FaCloudUploadAlt, FaShieldAlt, FaHeadphonesAlt, FaPlay } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function CTA4() {
  const imageUrl = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
  const avatarUrl = 'https://i.pravatar.cc/150?img=7'; 

  return (
    <div className="bg-gray-900 text-white p-8 md:p-16 rounded-3xl max-w-7xl mx-auto shadow-2xl font-sans">
      <div className="flex flex-col lg:flex-row gap-12 items-center">

        <div className="lg:w-1/2 relative order-last lg:order-first">
          <img
            src={imageUrl}
            alt="Setup de gaming ou de développement avec néons"
            className="rounded-2xl shadow-lg w-full object-cover border-4 border-purple-500/50"
            style={{ aspectRatio: '4/3' }}
          />
           <div className="absolute top-4 left-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 shadow-md">
                <FaShieldAlt className="text-green-400 text-xl" />
                <span className="text-xs font-medium">Sécurité Renforcée</span>
            </div>
             <button className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-5 rounded-full flex items-center gap-1 transition duration-300 ease-in-out shadow hover:shadow-lg">
                <FaPlay /> Voir en Action
            </button>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase">Exclusivité</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Débloquez le Plein <br />
            <span className="text-purple-400">Potentiel Technologique</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            Accédez à des outils avancés et une infrastructure fiable pour construire l'avenir. Performances et sécurité au rendez-vous.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 text-left text-gray-300 text-sm">
             <div className="flex items-center gap-2"><FaMobileAlt className="text-purple-400"/> Applications Mobiles</div>
             <div className="flex items-center gap-2"><FaLaptopCode className="text-purple-400"/> Développement Web</div>
             <div className="flex items-center gap-2"><FaCloudUploadAlt className="text-purple-400"/> Cloud Scalable</div>
             <div className="flex items-center gap-2"><FaHeadphonesAlt className="text-purple-400"/> Support Expert</div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button className="bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow-lg hover:shadow-purple-500/30">
              Commencer Maintenant <FiArrowRight />
            </button>
             <div className="flex items-center gap-2">
                 <img src={avatarUrl} alt="Expert" className="w-8 h-8 rounded-full border-2 border-purple-400 object-cover" />
                 <span className="text-sm text-gray-400">Conseillé par les experts</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
`
}