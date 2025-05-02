import { MdOutlineDeveloperMode, MdOutlineMemory, MdOutlineNetworkCheck, MdOutlineWidgets, MdOutlineDataUsage, MdOutlineCloudSync } from "react-icons/md";

export default function Features5() {
  return (
    <div id="features" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Technologie Avancée</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innover pour votre Succès
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto lg:mx-auto">
            Explorez nos solutions de pointe conçues pour repousser les limites et vous donner un avantage concurrentiel décisif.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineDeveloperMode className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mode Développeur Avancé</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Accès à des outils et API de bas niveau pour une personnalisation sans limite.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineMemory className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Gestion de Mémoire Intelligente</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Optimisation automatique de l'utilisation de la mémoire pour des performances accrues.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineNetworkCheck className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Analyse Réseau en Temps Réel</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Surveillance et diagnostic proactifs des problèmes de connectivité réseau.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineWidgets className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Composants Modulaires</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Construisez vos interfaces avec notre bibliothèque de composants réutilisables et extensibles.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineDataUsage className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Traitement Big Data</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Capacités de traitement parallèle pour analyser de grands volumes de données rapidement.
              </dd>
            </div>
            <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <MdOutlineCloudSync className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Synchronisation Cloud Hybride</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Intégration transparente entre vos infrastructures cloud et on-premise.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
