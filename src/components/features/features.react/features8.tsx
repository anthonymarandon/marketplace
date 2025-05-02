import { MdOutlineBolt, MdOutlineStorage, MdAutorenew, MdCloudQueue } from "react-icons/md";


export default function Features8() {
  return (
    <div id="features" className="bg-gradient-to-r from-cyan-50 to-blue-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nos Fonctionnalités Clés</h2>
          <p className="text-xl text-gray-600">
            Découvrez comment notre plateforme répond à vos besoins essentiels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <MdOutlineBolt className="h-10 w-10 text-indigo-500 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Haute Vitesse</h4>
              <p className="text-gray-500">Infrastructure optimisée pour des temps de réponse minimaux.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <MdAutorenew className="h-10 w-10 text-indigo-500 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Mise en Cache Intelligente</h4>
              <p className="text-gray-500">Accélération de l'accès aux données fréquemment utilisées.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <MdCloudQueue className="h-10 w-10 text-indigo-500 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Architecture Évolutive</h4>
              <p className="text-gray-500">S'adapte automatiquement à la charge de travail.</p>
            </div>
          </div>
           <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <MdOutlineStorage className="h-10 w-10 text-cyan-500 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Stockage Fiable</h4>
              <p className="text-gray-500">Stockez vos données en toute sécurité avec nos solutions redondantes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
