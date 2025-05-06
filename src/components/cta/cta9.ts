import { Component } from '@/types/components';
import CTA9 from './cta.react/cta9';

export const componentCTA9: Component = {
  id: 'cta9',
  name: 'CTA 9',
  description: 'Server Component',
  category: 'cta',
  component: CTA9,
  code: `import { FaPlay, FaVideo, FaLightbulb } from 'react-icons/fa';
import { FiYoutube, FiHelpCircle } from 'react-icons/fi';

export default function CTA9() {
  const videoThumbnailUrl = 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="bg-gradient-to-bl from-orange-50 via-yellow-50 to-amber-100 p-8 md:py-16 max-w-7xl mx-auto shadow-lg font-sans">
      <div className="max-w-4xl mx-auto text-center">
          <FaVideo className="text-amber-500 text-5xl mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Découvrez Notre Solution <br/> en <span className="text-orange-600">Action</span>
          </h1>
          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
              Regardez notre courte vidéo de démonstration pour voir comment notre plateforme peut simplifier vos processus et améliorer votre productivité.
          </p>

           <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow hover:shadow-md">
                  <FaPlay /> Regarder la Démo (2 min)
              </button>
              <button className="bg-white border border-orange-200 hover:bg-amber-50 text-orange-600 font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow-sm hover:shadow">
                  Poser une Question <FiHelpCircle />
              </button>
          </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto relative group cursor-pointer">
            <img 
                src={videoThumbnailUrl} 
                alt="Miniature vidéo montrant une interface utilisateur ou une équipe" 
                className="rounded-xl shadow-xl w-full object-cover aspect-video transition duration-300 group-hover:opacity-80"
            />
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
                <FaPlay className="text-white text-6xl drop-shadow-lg" />
            </div>
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-1.5 shadow">
                <FaLightbulb className="text-yellow-500"/> 
                <span>Fonctionnalités Clés</span>
            </div>
      </div>

       <div className="mt-16 pt-8 border-t border-amber-200 text-center">
        <p className="text-sm text-gray-500 mb-4">Intégration vidéo via :</p>
        <div className="flex justify-center items-center gap-8 text-gray-400">
          <FiYoutube className="text-4xl hover:text-red-600 transition"/>
          <span className="font-medium text-2xl">Vimeo</span> 
        </div>
      </div>

    </div>
  );
}
`
}