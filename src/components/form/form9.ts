import { Component } from "@/types/components";
import form9  from "./form.react/form9";

export const componentForm9: Component = {
  id: 'form9',
  name: 'form9',
  description: 'Client Component',
  category: 'form',
  component: form9,
  code: `'use client';

import { useState } from 'react';

export default function Form9() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div id="form" className="bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="w-full py-20 px-6 md:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-5 text-amber-400">
            Contactez l'Excellence
          </h2>
          <div className="w-28 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-300 mx-auto mb-12 rounded-full"></div>
          <p className="text-center text-gray-300 mb-12 max-w-lg mx-auto text-lg font-light">
            Pour des services premium et des solutions sur mesure, notre équipe est à votre écoute.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-amber-400 border-opacity-30 shadow-2xl relative">
            <div className={\`transition-opacity duration-500 $\{isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}\`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-amber-300 mb-2">Prénom</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full p-3.5 pl-4 bg-gray-700 bg-opacity-50 border border-amber-400 border-opacity-50 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-amber-300 mb-2">Nom</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full p-3.5 pl-4 bg-gray-700 bg-opacity-50 border border-amber-400 border-opacity-50 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-2">Adresse Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3.5 pl-4 bg-gray-700 bg-opacity-50 border border-amber-400 border-opacity-50 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    placeholder="votre.email@prestige.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-amber-300 mb-2">Sujet de votre Requête</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3.5 pl-4 bg-gray-700 bg-opacity-50 border border-amber-400 border-opacity-50 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                    placeholder="Demande d'information"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-amber-300 mb-2">Votre Message Détaillé</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-4 bg-gray-700 bg-opacity-50 border border-amber-400 border-opacity-50 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Veuillez exposer votre demande..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-gray-900 font-semibold py-3.5 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-amber-400"
              >
                Envoyer Votre Requête
              </button>
            </div>
            <div className={\`transition-opacity duration-500 $\{isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl\`}>
              <h3 className="text-3xl font-semibold text-amber-400">Requête Transmise</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
`
};