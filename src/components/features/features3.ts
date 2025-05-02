import { Component } from "@/types/components";
import Features3 from "./features.react/features3";

export const componentFeatures3: Component = {
  id: 'features3',
  name: 'Features 3',
  description: 'Server Component',
  category: 'features',
  component: Features3,
  code: `import { MdOutlineBarChart, MdOutlineCode, MdOutlineDevices, MdOutlineVpnKey } from "react-icons/md";

export default function Features3() {
  return (
    <div id="features" className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8 text-center md:text-left">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Fonctionnalités Clés</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont vous avez besoin, au même endroit.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto md:mx-0">
              Notre plateforme centralise des outils puissants pour vous permettre de gérer efficacement vos projets, de la conception au déploiement, en passant par la sécurisation.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MdOutlineCode className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">Développement Simplifié</h4>
                <p className="mt-1 text-base text-gray-500">Environnement de développement intégré avec outils de débogage et déploiement en un clic.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MdOutlineBarChart className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">Analyses Détaillées</h4>
                <p className="mt-1 text-base text-gray-500">Suivez les performances, comprenez les tendances et prenez des décisions basées sur les données.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MdOutlineVpnKey className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">Sécurité Renforcée</h4>
                <p className="mt-1 text-base text-gray-500">Protection contre les menaces avec pare-feu, détection d'intrusion et gestion des accès.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MdOutlineDevices className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">Compatibilité Multiplateforme</h4>
                <p className="mt-1 text-base text-gray-500">Accédez à vos outils et données depuis n'importe quel appareil, n'importe où.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`
}