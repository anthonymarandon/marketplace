import { Component } from "@/types/components";
import Features6 from "./features.react/features6";

export const componentFeatures6: Component = {
  id: 'features6',
  name: 'Features 6',
  description: 'Server Component',
  category: 'features',
  component: Features6,
  code: `import { MdOutlineDesignServices, MdOutlineAppRegistration, MdOutlineSystemUpdateAlt, MdQueryStats, MdOutlineSupport, MdOutlineVerifiedUser } from "react-icons/md";

export default function Features6() {
  return (
    <div id="features" className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Simple, Puissant, Fiable</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une solution complète pensée pour la simplicité d'utilisation sans compromettre la puissance et la fiabilité.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <MdOutlineDesignServices className="text-6xl text-red-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interface Intuitive</h3>
            <p className="text-gray-600">Prise en main facile grâce à une interface utilisateur épurée et logique.</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <MdOutlineAppRegistration className="text-6xl text-blue-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Enregistrement Facile</h3>
            <p className="text-gray-600">Processus d'inscription rapide et configuration initiale guidée.</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <MdOutlineSystemUpdateAlt className="text-6xl text-green-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mises à Jour Automatiques</h3>
            <p className="text-gray-600">Bénéficiez toujours des dernières fonctionnalités sans intervention manuelle.</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <MdQueryStats className="text-6xl text-purple-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Statistiques Claires</h3>
            <p className="text-gray-600">Tableaux de bord lisibles pour un suivi précis de vos indicateurs clés.</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <MdOutlineSupport className="text-6xl text-amber-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Réactif</h3>
            <p className="text-gray-600">Une équipe d'assistance disponible pour répondre à toutes vos questions.</p>
          </div>
          <div className="bg-white p-8 rounded-lg text-center transition-transform transform hover:scale-105 duration-300">
            <MdOutlineVerifiedUser className="text-6xl text-teal-500 mx-auto mb-5" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sécurité Vérifiée</h3>
            <p className="text-gray-600">Audits de sécurité réguliers pour garantir la protection de vos données.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`
}