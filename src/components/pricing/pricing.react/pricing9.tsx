import { FiCheckCircle, FiLock, FiDatabase, FiCpu, FiPieChart, FiArrowRightCircle } from 'react-icons/fi';

const proPlan = {
  price: "99€",
  frequency: "/mois",
  features: [
    { name: "Accès illimité aux fonctionnalités Pro", icon: FiCheckCircle },
    { name: "Sécurité avancée des données", icon: FiLock },
    { name: "Stockage de données jusqu'à 1 To", icon: FiDatabase },
    { name: "Ressources de calcul dédiées", icon: FiCpu },
    { name: "Tableaux de bord analytiques détaillés", icon: FiPieChart },
    { name: "Support prioritaire par chat et email", icon: FiCheckCircle },
  ],
  cta: "Démarrer avec le Plan Pro",
};

export default function Pricing9() {
  return (
    <div className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Concentrez-vous sur la Croissance avec Notre Plan Pro
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            La solution complète pour les équipes qui exigent performance, sécurité et support de premier ordre.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden lg:flex lg:items-center">
          <div className="p-8 lg:p-12 lg:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-1">Plan Pro</h3>
            <p className="text-gray-400 mb-6">Tout ce dont vous avez besoin pour passer au niveau supérieur.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">{proPlan.price}</span>
              <span className="text-xl font-medium text-gray-400">{proPlan.frequency}</span>
            </div>
            <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-colors duration-300">
              {proPlan.cta}
              <FiArrowRightCircle className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Features List */}
          <div className="p-8 lg:p-12 lg:w-1/2 bg-gray-700/50 lg:rounded-r-2xl">
            <h4 className="text-xl font-semibold text-white mb-6">Fonctionnalités incluses :</h4>
            <ul className="space-y-4">
              {proPlan.features.map((feature) => (
                <li key={feature.name} className="flex items-start">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-indigo-400" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-300">{feature.name}</p>
                </li>
              ))}
            </ul>
             <p className="mt-8 text-sm text-gray-500">Besoin de plus ? <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">Contactez-nous pour une solution Entreprise.</a></p>
          </div>
        </div>

      </div>
    </div>
  );
}
