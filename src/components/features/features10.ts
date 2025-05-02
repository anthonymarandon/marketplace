import { Component } from "@/types/components";
import Features10 from "./features.react/features10";

export const componentFeatures10: Component = {
  id: 'features10',
  name: 'Features 10',
  description: 'Server Component',
  category: 'features',
  component: Features10,
  code: `import { MdFilterList, MdOutlineHistory, MdNotificationsNone, MdOutlineSyncProblem, MdPieChartOutline, MdPublic } from "react-icons/md";

export default function Features10() {
  return (
    <div id="features" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fonctionnalités Avancées pour Experts
           </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                Des outils spécialisés pour affiner vos processus, analyser en profondeur et gérer les exceptions.
            </p>
        </div>

        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-900/5">
             <div className="flex items-center gap-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <MdFilterList className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Filtrage Granulaire</h3>
             </div>
             <p className="text-sm leading-6 text-gray-600">Appliquez des filtres complexes pour affiner vos jeux de données et rapports.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-900/5">
             <div className="flex items-center gap-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <MdOutlineHistory className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Historique Complet</h3>
             </div>
             <p className="text-sm leading-6 text-gray-600">Tracez chaque modification et accédez à l'historique complet des actions.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-900/5">
             <div className="flex items-center gap-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <MdNotificationsNone className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Notifications Personnalisées</h3>
             </div>
             <p className="text-sm leading-6 text-gray-600">Configurez des alertes basées sur des événements spécifiques ou des seuils.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-900/5">
             <div className="flex items-center gap-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <MdOutlineSyncProblem className="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Gestion des Erreurs</h3>
             </div>
             <p className="text-sm leading-6 text-gray-600">Outils de diagnostic et de résolution pour les erreurs et exceptions.</p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-900/5">
             <div className="flex items-center gap-x-4 mb-4">
                <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                  <MdPieChartOutline className="h-6 w-6 text-amber-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Rapports Avancés</h3>
             </div>
             <p className="text-sm leading-6 text-gray-600">Créez des rapports sur mesure avec des métriques et dimensions personnalisées.</p>
          </div>
           <div className="flex flex-col items-center text-center lg:items-start lg:text-left bg-white rounded-2xl shadow-xl p-6 ring-1 ring-gray-900/5">
             <div className="flex items-center gap-x-4 mb-4">
                <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                  <MdPublic className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Déploiement Global</h3>
             </div>
             <p className="text-sm leading-6 text-gray-600">Options de déploiement multi-régions pour une faible latence mondiale.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`
}