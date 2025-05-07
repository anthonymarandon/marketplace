'use client';

import { useState } from 'react';

export default function Form7() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div id="form" className="bg-slate-200">
      <div className="w-full py-20 px-6 md:px-8">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-slate-800">
            Contactez-Nous
          </h2>
          <div className="w-28 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto text-lg">
            Pour toute demande professionnelle, veuillez remplir le formulaire ci-dessous.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-lg relative border border-slate-300">
            <div className={`transition-opacity duration-500 ${isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">Prénom</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full p-3.5 pl-4 border border-slate-400 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-200"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full p-3.5 pl-4 border border-slate-400 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Professionnel</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3.5 pl-4 border border-slate-400 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-200"
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Objet de la demande</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3.5 pl-4 border border-slate-400 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-200"
                    placeholder="Objet de votre message"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Votre Message</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-4 border border-slate-400 rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Détaillez votre demande ici..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3.5 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
              >
                Soumettre la demande
              </button>
            </div>
            <div className={`transition-opacity duration-500 ${isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg`}>
              <h3 className="text-3xl font-semibold text-slate-700">Demande Envoyée</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
