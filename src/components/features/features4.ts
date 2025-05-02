import { Component } from "@/types/components";
import Features4 from "./features.react/features4";

export const componentFeatures4: Component = {
  id: 'features4',
  name: 'Features 4',
  description: 'Server Component',
  category: 'features',
  component: Features4,
  code: `import { MdOutlineRocketLaunch, MdOutlineShield, MdOutlineSettingsSuggest, MdOutlineGroupWork, MdOutlineTrendingUp, MdOutlineHeadsetMic } from "react-icons/md";

export default function Features4() {
  return (
    <div id="features" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl mb-4">
            Conçu pour la Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez une suite de fonctionnalités optimisées pour la vitesse, la sécurité et la collaboration, propulsant vos projets vers de nouveaux sommets.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-5">
              <MdOutlineRocketLaunch className="h-8 w-8" />
            </div>
            <h3 className="text-lg leading-6 font-medium mb-2">Déploiement Rapide</h3>
            <p className="text-base text-gray-400">Mise en production accélérée grâce à nos pipelines CI/CD optimisés.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-5">
              <MdOutlineShield className="h-8 w-8" />
            </div>
            <h3 className="text-lg leading-6 font-medium mb-2">Sécurité Intégrée</h3>
            <p className="text-base text-gray-400">Protection multicouche pour sécuriser vos applications et données critiques.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-5">
              <MdOutlineSettingsSuggest className="h-8 w-8" />
            </div>
            <h3 className="text-lg leading-6 font-medium mb-2">Configuration Intelligente</h3>
            <p className="text-base text-gray-400">Paramètres auto-ajustables pour une performance optimale sans effort.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-5">
              <MdOutlineGroupWork className="h-8 w-8" />
            </div>
            <h3 className="text-lg leading-6 font-medium mb-2">Collaboration Facilitée</h3>
            <p className="text-base text-gray-400">Outils collaboratifs en temps réel pour une meilleure synergie d'équipe.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-5">
              <MdOutlineTrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-lg leading-6 font-medium mb-2">Scalabilité Automatique</h3>
            <p className="text-base text-gray-400">Ajustement dynamique des ressources pour gérer les pics de charge.</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-5">
              <MdOutlineHeadsetMic className="h-8 w-8" />
            </div>
            <h3 className="text-lg leading-6 font-medium mb-2">Support Proactif</h3>
            <p className="text-base text-gray-400">Assistance technique anticipant vos besoins pour une expérience fluide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`
}