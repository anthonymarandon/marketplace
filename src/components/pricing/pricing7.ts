import { Component } from "@/types/components";
import Pricing7 from "./pricing.react/pricing7";

export const componentPricing7: Component = {
  id: 'pricing7',
  name: 'Pricing 7',
  description: 'Server Component',
  category: 'pricing',
  component: Pricing7,
  code: `import { FiCheck, FiZap, FiUserPlus, FiTrendingUp, FiSettings, FiLifeBuoy } from "react-icons/fi";

const tiers = [
  {
    name: "Basique",
    price: "29€",
    frequency: "/mois",
    description: "Idéal pour les freelances et petites équipes.",
    features: [
      "10 Projets",
      "5 Go de stockage",
      "Analyses de base",
      "Support email",
    ],
    cta: "Choisir Basique",
    mostPopular: false,
    icon: FiZap,
    color: "cyan",
  },
  {
    name: "Populaire",
    price: "79€",
    frequency: "/mois",
    description: "Parfait pour les entreprises en croissance.",
    features: [
      "Projets illimités",
      "50 Go de stockage",
      "Analyses avancées",
      "Support prioritaire",
      "Intégrations Zapier",
    ],
    cta: "Choisir Populaire",
    mostPopular: true,
    icon: FiTrendingUp,
    color: "blue",
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    frequency: "",
    description: "Pour les grandes organisations avec besoins spécifiques.",
    features: [
      "Tout du plan Populaire",
      "Stockage illimité",
      "Analyses personnalisées",
      "Support dédié 24/7",
      "Accès API",
      "Fonctionnalités SSO",
    ],
    cta: "Nous contacter",
    mostPopular: false,
    icon: FiUserPlus,
    color: "indigo",
  },
];

export default function Pricing7() {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Des Plans Adaptés à Votre Croissance
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos besoins actuels et futurs. Simple, transparent et flexible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={\`relative flex flex-col rounded-2xl border \${tier.mostPopular ? \`border-\${tier.color}-500\` : 'border-gray-200'} bg-white shadow-lg \${tier.mostPopular ? 'ring-2 ring-offset-2 ring-blue-500' : ''}\`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    Populaire
                  </span>
                </div>
              )}
              <div className="p-8 flex-grow">
                <div className={\`inline-block p-3 rounded-lg bg-\${tier.color}-100 mb-4\`}>
                  <tier.icon className={\`w-6 h-6 text-\${tier.color}-600\`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.frequency && <span className="text-base font-medium text-gray-500">{tier.frequency}</span>}
                </div>
                <ul role="list" className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiCheck className={\`w-5 h-5 text-\${tier.color}-500\`} aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-b-2xl mt-auto">
                <button
                  className={\`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium \${
                    tier.mostPopular
                      ? \`bg-\${tier.color}-600 text-white hover:bg-\${tier.color}-700\`
                      : \`bg-\${tier.color}-100 text-\${tier.color}-700 hover:bg-\${tier.color}-200\`
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-\${tier.color}-500 transition-colors duration-300\`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-gray-200 pt-12">
           <h3 className="text-2xl font-semibold text-gray-900 mb-6">Inclus dans tous les plans</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <div className="flex items-center justify-center sm:justify-start">
                <FiSettings className="w-6 h-6 text-blue-600 mr-3"/>
                <span className="text-gray-700">Configuration Facile</span>
             </div>
             <div className="flex items-center justify-center sm:justify-start">
                <FiLifeBuoy className="w-6 h-6 text-blue-600 mr-3"/>
                <span className="text-gray-700">Support Communautaire</span>
             </div>
             <div className="flex items-center justify-center sm:justify-start">
                <FiTrendingUp className="w-6 h-6 text-blue-600 mr-3"/>
                <span className="text-gray-700">Mises à Jour Continues</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
`
};