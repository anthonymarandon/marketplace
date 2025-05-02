import { MdOutlineAccessibilityNew, MdOutlineApi, MdOutlineDashboardCustomize, MdOutlineEventAvailable, MdOutlinePayment, MdOutlineTaskAlt } from "react-icons/md";

export default function Features9() {
  return (
    <div id="features" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Fonctionnalités Essentielles
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour démarrer et réussir, présenté de manière claire et accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
          <div className="text-center px-4">
            <div className="mb-5 w-20 h-20 mx-auto bg-rose-100 rounded-full flex items-center justify-center">
              <MdOutlineAccessibilityNew className="h-10 w-10 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibilité</h3>
            <p className="text-gray-500">Conçu pour être utilisable par tous, conformément aux normes WCAG.</p>
          </div>
          <div className="text-center px-4">
            <div className="mb-5 w-20 h-20 mx-auto bg-sky-100 rounded-full flex items-center justify-center">
              <MdOutlineApi className="h-10 w-10 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">API Robuste</h3>
            <p className="text-gray-500">Intégrez facilement nos services avec vos applications existantes.</p>
          </div>
          <div className="text-center px-4">
            <div className="mb-5 w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
              <MdOutlineDashboardCustomize className="h-10 w-10 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tableaux de Bord</h3>
            <p className="text-gray-500">Visualisez vos données clés en un coup d'œil.</p>
          </div>
          <div className="text-center px-4">
            <div className="mb-5 w-20 h-20 mx-auto bg-violet-100 rounded-full flex items-center justify-center">
              <MdOutlineEventAvailable className="h-10 w-10 text-violet-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Haute Disponibilité</h3>
            <p className="text-gray-500">Infrastructure redondante pour une disponibilité maximale.</p>
          </div>
          <div className="text-center px-4">
            <div className="mb-5 w-20 h-20 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
              <MdOutlinePayment className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Options de Paiement</h3>
            <p className="text-gray-500">Intégration facile avec les principales passerelles de paiement.</p>
          </div>
          <div className="text-center px-4">
            <div className="mb-5 w-20 h-20 mx-auto bg-lime-100 rounded-full flex items-center justify-center">
              <MdOutlineTaskAlt className="h-10 w-10 text-lime-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestion des Tâches</h3>
            <p className="text-gray-500">Organisez et suivez l'avancement de vos projets efficacement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
