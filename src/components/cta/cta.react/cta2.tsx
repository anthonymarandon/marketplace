import { FaRocket, FaBullhorn, FaUsers, FaChartLine, FaEnvelope } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';


export default function CTA2() {
  const mainImageUrl = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
  const avatar1Url = 'https://i.pravatar.cc/150?img=4';
  const avatar2Url = 'https://i.pravatar.cc/150?img=5';
  const avatar3Url = 'https://i.pravatar.cc/150?img=6';

  return (
    <div className="bg-gradient-to-tr from-blue-50 via-teal-50 to-cyan-100 p-8 md:p-16 rounded-3xl max-w-7xl mx-auto shadow-lg font-sans">
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center"> 

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">Lancez-vous</h2>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Propulsez Votre Projet <br />
            <span className="text-blue-600">Vers de Nouveaux Sommets</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Notre plateforme innovante vous donne les outils pour réussir. Découvrez comment nous pouvons vous aider à atteindre vos objectifs plus rapidement.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow hover:shadow-md">
              Démarrer Gratuitement <FaRocket />
            </button>
            <button className="bg-transparent border border-blue-300 hover:bg-blue-50 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow">
              Demander une Démo
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
             <div className="flex -space-x-3">
              <img src={avatar1Url} alt="Utilisateur 1" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              <img src={avatar2Url} alt="Utilisateur 2" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
              <img src={avatar3Url} alt="Utilisateur 3" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
            </div>
            <div>
                <p className="text-gray-700 font-medium">
                    Rejoint par 5,000+ innovateurs.
                </p>
                 <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    <span className="text-sm">★★★★☆</span>
                 </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          <img
            src={mainImageUrl}
            alt="Équipe collaborant autour d'un écran"
            className="rounded-2xl shadow-xl w-full object-cover"
            style={{ aspectRatio: '4/3' }}
          />

          <div className="absolute -top-4 -right-4 md:top-10 md:-right-10 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 transform transition duration-300 hover:scale-105 w-60">
             <div className="p-2 bg-teal-100 rounded-full">
                <FaChartLine className="text-teal-500 text-2xl" />
             </div>
            <div>
              <p className="font-semibold text-gray-800">Croissance Accélérée</p>
              <p className="text-xs text-gray-500">+30% de conversions</p>
            </div>
          </div>

          <div className="absolute bottom-10 -left-4 md:bottom-16 md:-left-10 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 transform transition duration-300 hover:scale-105 w-60">
             <div className="p-2 bg-blue-100 rounded-full">
                 <FaUsers className="text-blue-500 text-2xl" />
             </div>
            <div>
              <p className="font-semibold text-gray-800">Communauté Active</p>
              <p className="text-xs text-gray-500">Échanges & entraide</p>
            </div>
          </div>

        </div>
      </div>

       <div className="mt-20 pt-8 border-t border-blue-200 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Intégrations Faciles</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
          <span className="flex items-center gap-2"><FaEnvelope className="text-2xl"/> Email</span>
          <span className="flex items-center gap-2"><FaBullhorn className="text-2xl"/> Marketing</span>
          <span className="flex items-center gap-2"><FiCheckCircle className="text-2xl"/> CRM</span>
        </div>
      </div>
    </div>
  );
}
