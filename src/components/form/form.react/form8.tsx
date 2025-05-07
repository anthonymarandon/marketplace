'use client';

import { useState } from 'react';

export default function Form8() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div id="form" className="bg-gradient-to-br from-pink-200 to-turquoise-200 py-16">
      <div className="w-full px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-pink-600">
            Une Idée Folle ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-turquoise-400 mx-auto mb-12 rounded-full"></div>
          <p className="text-gray-700 mb-12 max-w-lg mx-auto text-xl">
            Partagez vos concepts les plus créatifs ! Nous adorons les défis.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto bg-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className={`transition-all duration-700 ease-in-out ${isSubmitted ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <div className="grid grid-cols-1 gap-y-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-pink-500 mb-2 text-left">Ton Prénom Funky</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full p-4 pl-5 border-2 border-turquoise-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      placeholder="Ex: SuperDev"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-pink-500 mb-2 text-left">Ton Nom Rigolo</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full p-4 pl-5 border-2 border-turquoise-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                      placeholder="Ex: CoderExtra"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold text-pink-500 mb-2 text-left">Ton Email Électrisant</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-4 pl-5 border-2 border-turquoise-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    placeholder="toi@aventure.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-bold text-pink-500 mb-2 text-left">Le Titre de ton Idée Géniale</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-4 pl-5 border-2 border-turquoise-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
                    placeholder="Une app qui fait des crêpes ?"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-pink-500 mb-2 text-left">Raconte-nous tout !</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full p-4 border-2 border-turquoise-300 rounded-2xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Plus c'est fou, mieux c'est..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pink-500 to-turquoise-500 hover:from-pink-600 hover:to-turquoise-600 text-white font-bold py-4 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-pink-400 text-lg"
              >
                Lancer la Fusée Créative !
              </button>
            </div>
            <div className={`transition-all duration-700 ease-in-out ${isSubmitted ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-105 pointer-events-none'} absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-95 p-6 rounded-3xl`}>
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-turquoise-500 mb-4">WOOOW !</h3>
              <p className="text-xl text-gray-700 text-center">Ton idée est partie dans la stratosphère !</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
