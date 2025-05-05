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

export default function Pricing5() {
  const features = [
    {
      icon: FiUploadCloud,
      title: "Stockage Illimité",
      description: "Ne vous souciez plus jamais de l'espace. Stockez tous vos fichiers, photos et documents sans aucune limitation.",
    },
    {
      icon: FiShield,
      title: "Sécurité Avancée",
      description: "Protection de niveau entreprise pour toutes vos données sensibles avec chiffrement de bout en bout et authentification à deux facteurs.",
    },
    {
      icon: FiActivity,
      title: "Performances Optimales",
      description: "Accédez à vos contenus avec une vitesse fulgurante grâce à nos serveurs haute performance répartis dans le monde entier.",
    },
    {
      icon: FiUsers,
      title: "Collaboration Efficace",
      description: "Travaillez en équipe sans effort avec des outils de partage, d'édition simultanée et de commentaires en temps réel.",
    },
    {
      icon: FiHeadphones,
      title: "Support Prioritaire",
      description: "Bénéficiez d'une assistance dédiée 24/7 avec un temps de réponse garanti inférieur à 2 heures par nos experts.",
    },
    {
      icon: FiMonitor,
      title: "Multi-appareils",
      description: "Synchronisez parfaitement votre expérience sur tous vos appareils : ordinateurs, tablettes, smartphones et plus encore.",
    },
  ];

  const guarantees = [
     { icon: FiCheckCircle, text: "Satisfaction garantie ou remboursé", color: "text-yellow-500" },
     { icon: FiFileText, text: "Facturation transparente sans surprise", color: "text-green-500" },
     { icon: FiCalendar, text: "Annulation possible à tout moment", color: "text-blue-500" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">Notre Offre Ultime</span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mt-2">
            Maximisez Votre Potentiel
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Accédez à l'ensemble de nos fonctionnalités avancées pour une expérience numérique sans compromis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-105">
              <div className="bg-blue-100 p-3 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-3">
                Garanties Incluses
              </h3>
              <ul className='space-y-3'>
                {guarantees.map((guarantee, index) => (
                  <li key={index} className='flex items-center'>
                    <guarantee.icon className={`w-6 h-6 mr-3 flex-shrink-0 ${guarantee.color.replace("text-", "text-blue-")}`} />
                    <span>{guarantee.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left mt-8 lg:mt-0 border-t lg:border-t-0 lg:border-l border-blue-500 pt-8 lg:pt-0 lg:pl-8">
              <h3 className="text-3xl font-bold mb-3">
                Boostez votre productivité dès aujourd'hui!
              </h3>
              <p className="text-lg text-blue-100 mb-6">
                Rejoignez des milliers d'utilisateurs satisfaits et profitez de notre meilleure offre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className='inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full transition-all duration-300 hover:bg-blue-50 hover:shadow-md active:transform active:scale-[0.98] shadow-lg'>
                  <IoRocketOutline className="w-5 h-5 mr-2" />
                  Souscrire au Plan Ultime
                </button>
                <button className='inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-blue-400 active:transform active:scale-[0.98] border border-blue-400'>
                  <FiStar className="w-5 h-5 mr-2" />
                  Voir les avis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
