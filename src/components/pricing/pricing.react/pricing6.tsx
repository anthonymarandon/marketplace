import { 
    FiUploadCloud, 
    FiShield, 
    FiActivity,
    FiUsers, 
    FiHeadphones, 
    FiMonitor, 
    FiCheckCircle, 
    FiFileText, 
    FiCalendar,
    FiStar
  } from "react-icons/fi";
  import { IoRocketOutline } from "react-icons/io5";
  
  export default function Pricing6() {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-semibold uppercase tracking-wide">Solution Complète</span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mt-2">
              La Plateforme Tout-en-Un
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Simplifiez votre flux de travail avec notre solution intégrée, conçue pour la performance et la collaboration.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300 hover:shadow-pink-200/50">
              <div className="bg-purple-100 p-3 rounded-lg mb-4">
                <FiUploadCloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Centralisation des Données</h3>
              <p className="text-gray-600 text-sm flex-grow">Accédez à tous vos fichiers et informations depuis une interface unique et intuitive.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300 hover:shadow-pink-200/50">
              <div className="bg-pink-100 p-3 rounded-lg mb-4">
                <FiShield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité Renforcée</h3>
              <p className="text-gray-600 text-sm flex-grow">Protégez vos actifs numériques avec des protocoles de sécurité de pointe et des sauvegardes automatiques.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300 hover:shadow-pink-200/50">
              <div className="bg-indigo-100 p-3 rounded-lg mb-4">
                <FiActivity className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyses Intégrées</h3>
              <p className="text-gray-600 text-sm flex-grow">Visualisez vos performances et prenez des décisions éclairées grâce à des tableaux de bord personnalisables.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300 hover:shadow-pink-200/50">
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <FiUsers className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration Facilitée</h3>
              <p className="text-gray-600 text-sm flex-grow">Partagez, commentez et travaillez en équipe sur vos projets en temps réel.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300 hover:shadow-pink-200/50">
              <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                <FiHeadphones className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Expert Dédié</h3>
              <p className="text-gray-600 text-sm flex-grow">Notre équipe est là pour vous accompagner à chaque étape et répondre à vos questions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300 hover:shadow-pink-200/50">
              <div className="bg-red-100 p-3 rounded-lg mb-4">
                <FiMonitor className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accès Multiplateforme</h3>
              <p className="text-gray-600 text-sm flex-grow">Utilisez notre solution sur votre ordinateur, tablette ou smartphone, où que vous soyez.</p>
            </div>
          </div>
  
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/3 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4">
                  Ce Que Nous Garantissons
                </h3>
                <ul className='space-y-3'>
                   <li className='flex items-center'>
                    <FiCheckCircle className={`w-6 h-6 mr-3 flex-shrink-0 text-pink-300`} />
                    <span>Mises à jour régulières incluses</span>
                  </li>
                   <li className='flex items-center'>
                    <FiFileText className={`w-6 h-6 mr-3 flex-shrink-0 text-purple-300`} />
                    <span>Contrat clair, sans frais cachés</span>
                  </li>
                   <li className='flex items-center'>
                    <FiCalendar className={`w-6 h-6 mr-3 flex-shrink-0 text-indigo-300`} />
                    <span>Flexibilité d'engagement</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left mt-8 lg:mt-0 border-t lg:border-t-0 lg:border-l border-purple-500/50 pt-8 lg:pt-0 lg:pl-8">
                <h3 className="text-3xl font-bold mb-3">
                  Prêt à transformer votre manière de travailler ?
                </h3>
                <p className="text-lg text-purple-100 mb-6">
                  Découvrez la puissance d'une solution unifiée. Essayez notre plateforme dès maintenant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className='inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-full transition-all duration-300 hover:bg-purple-50 hover:shadow-md active:transform active:scale-[0.98] shadow-lg'>
                    <IoRocketOutline className="w-5 h-5 mr-2" />
                    Démarrer mon essai gratuit
                  </button>
                  <button className='inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-pink-400 active:transform active:scale-[0.98] border border-pink-400'>
                    <FiStar className="w-5 h-5 mr-2" />
                    Demander une démo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  