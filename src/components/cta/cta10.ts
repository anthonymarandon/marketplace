import { Component } from '@/types/components';
import CTA10 from './cta.react/cta10';

export const componentCTA10: Component = {
  id: 'cta10',
  name: 'CTA 10',
  description: 'Server Component',
  category: 'cta',
  component: CTA10,
  code: `import { FiBriefcase, FiTrendingUp, FiSettings, FiLifeBuoy, FiArrowRight } from 'react-icons/fi';

export default function CTA10() {
  const imageUrl = 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';

  const features = [
    { icon: FiBriefcase, text: 'Gestion de Projet Simplifiée' },
    { icon: FiTrendingUp, text: 'Analyse de Performance Avancée' },
    { icon: FiSettings, text: 'Personnalisation Facile' },
    { icon: FiLifeBuoy, text: 'Support Client Dédié' },
  ];

  return (
    <div className="bg-white p-8 md:p-16 rounded-lg max-w-7xl mx-auto font-sans border border-gray-200 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-12 items-center">

        <div className="lg:w-1/2 order-2 lg:order-1">
           <h2 className="text-base font-semibold text-blue-700 uppercase tracking-wide">Solution Complète</h2>
           <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
             Optimisez Votre Stratégie d'Entreprise Aujourd'hui
           </h1>
           <p className="mt-4 text-gray-600 text-base md:text-lg">
             Notre suite d'outils intégrés vous permet de rationaliser vos opérations, d'améliorer la collaboration et de prendre des décisions éclairées basées sur les données.
           </p>

          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full">
                  <feature.icon className="w-4 h-4 text-blue-700" />
                </div>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

           <div className="mt-10">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md flex items-center justify-center sm:w-auto w-full gap-2 transition duration-300 ease-in-out shadow hover:shadow-lg">
                  Demander une Consultation <FiArrowRight />
              </button>
           </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2">
          <img
            src={imageUrl}
            alt="Équipe en réunion discutant de stratégies"
            className="rounded-lg shadow-md w-full object-cover"
            style={{ aspectRatio: '5/4' }} 
           />
        </div>

      </div>
    </div>
  );
}
`
}