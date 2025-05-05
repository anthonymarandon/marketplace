import { Component } from "@/types/components";
import Pricing8 from "./pricing.react/pricing8";

export const componentPricing8: Component = {
  id: 'pricing8',
  name: 'Pricing 8',
  description: 'Server Component',
  category: 'pricing',
  component: Pricing8,
  code: `import { FiCheck, FiMinus, FiArrowRight } from 'react-icons/fi';

const plans = [
  { name: "Gratuit", price: "0€", cta: "Commencer gratuitement", color: "gray" },
  { name: "Pro", price: "49€", cta: "Passer au Pro", color: "green" },
  { name: "Équipe", price: "199€", cta: "Choisir Équipe", color: "purple" },
  { name: "Entreprise", price: "Contactez-nous", cta: "Demander un devis", color: "blue" },
];

const features = [
  { name: "Utilisateurs", values: ["1", "1", "5", "Illimités"] },
  { name: "Projets", values: ["3", "Illimités", "Illimités", "Illimités"] },
  { name: "Stockage", values: ["1 Go", "20 Go", "100 Go", "Personnalisé"] },
  { name: "Analyses de base", values: [true, true, true, true] },
  { name: "Support Email", values: [true, true, true, true] },
  { name: "Analyses avancées", values: [false, true, true, true] },
  { name: "Intégrations", values: [false, "Basique", "Avancées", "Personnalisées"] },
  { name: "Support Prioritaire", values: [false, false, true, true] },
  { name: "Gestionnaire de compte dédié", values: [false, false, false, true] },
  { name: "Accès API", values: [false, false, false, true] },
  { name: "SSO", values: [false, false, false, true] },
];

const getTextColor = (color: string) => {
  switch (color) {
    case 'green': return 'text-green-600';
    case 'purple': return 'text-purple-600';
    case 'blue': return 'text-blue-600';
    default: return 'text-gray-900';
  }
}

const getButtonColor = (color: string) => {
  switch (color) {
    case 'green': return 'bg-green-600 hover:bg-green-700 text-white';
    case 'purple': return 'bg-purple-600 hover:bg-purple-700 text-white';
    case 'blue': return 'bg-blue-600 hover:bg-blue-700 text-white';
    default: return 'bg-gray-200 hover:bg-gray-300 text-gray-800';
  }
}

export default function Pricing8() {
  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Comparez Nos Plans en Détail
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez la solution parfaite pour vos besoins en comparant les fonctionnalités clés de chaque offre.
          </p>
        </div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left text-gray-500 min-w-[800px]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="py-3 px-6 sticky left-0 bg-gray-100 z-10 w-1/4">Fonctionnalités</th>
                {plans.map((plan) => (
                  <th key={plan.name} scope="col" className={\`py-3 px-6 text-center \${getTextColor(plan.color)}\`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 font-semibold text-gray-900 sticky left-0 bg-white z-10">Prix (par mois)</td>
                {plans.map((plan) => (
                  <td key={\`\${plan.name}-price\`} className="py-4 px-6 text-center font-semibold text-gray-900">
                    {plan.price}
                  </td>
                ))}
              </tr>

              {features.map((feature, featureIndex) => (
                <tr key={\`\${feature.name}\`} className={\`border-b \${featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}\`}>
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap sticky left-0 bg-inherit z-10">{feature.name}</td>
                  {feature.values.map((value, planIndex) => (
                    <td key={\`\${feature.name}-\${plans[planIndex].name}\`} className="py-4 px-6 text-center">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <FiCheck className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <FiMinus className="w-5 h-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="bg-gray-100">
                 <td className="py-6 px-6 sticky left-0 bg-gray-100 z-10"></td>
                 {plans.map((plan) => (
                  <td key={\`\${plan.name}-cta\`} className="py-6 px-6 text-center">
                    <button
                      className={\`inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 \${getButtonColor(plan.color)} focus:ring-\${plan.color}-500 transition-colors duration-300 whitespace-nowrap\`}
                    >
                      {plan.cta}
                      {plan.name !== "Entreprise" && <FiArrowRight className="ml-2 w-4 h-4" />}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
`
};