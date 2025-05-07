'use client';

import { useState } from 'react';

export default function Form5() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div id="form" className="bg-gradient-to-br from-blue-100 to-cyan-200">
      <div className="w-full py-20 px-6 md:px-8">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-blue-700">
            Entrons en contact
          </h2>
          <div className="w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto text-lg">
            Une question, une idée, un projet ? Remplissez ce formulaire et notre équipe vous répondra au plus vite.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl relative">
            <div className={`transition-opacity duration-500 ${isSubmitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full p-3.5 pl-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full p-3.5 pl-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3.5 pl-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Sujet</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3.5 pl-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-4 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Écrivez votre message ici..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3.5 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Envoyer le message
              </button>
            </div>
            <div className={`transition-opacity duration-500 ${isSubmitted ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 flex items-center justify-center`}>
              <h3 className="text-3xl font-semibold text-blue-600">Merci pour votre message</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
