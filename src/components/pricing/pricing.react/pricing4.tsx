import { 
  FiUploadCloud, 
  FiShield, 
  FiActivity,
  FiUsers, 
  FiHeadphones, 
  FiMonitor, 
  FiInfo, 
  FiCheckCircle, 
  FiFileText, 
  FiCalendar 
} from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

export default function Pricing4() {
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
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Plan Premium
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages offerts par notre plan d'abonnement premium pour répondre à tous vos besoins numériques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center h-full">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Prêt à passer au niveau supérieur ?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Rejoignez plus de 10 000 entreprises qui font confiance à notre service premium pour leurs besoins numériques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className='inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-purple-700 hover:shadow-md active:transform active:scale-[0.98] shadow-lg'>
                <IoRocketOutline className="w-5 h-5 mr-2" />
                Commencer maintenant
              </button>
              <button className='inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:bg-gray-200 active:transform active:scale-[0.98] border border-gray-200'>
                <FiInfo className="w-5 h-5 mr-2" />
                En savoir plus
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
             <ul className='space-y-3'>
               {guarantees.map((guarantee, index) => (
                 <li key={index} className='flex items-center text-gray-700'>
                   <guarantee.icon className={`w-6 h-6 mr-3 flex-shrink-0 ${guarantee.color}`} />
                   <span>{guarantee.text}</span>
                 </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
