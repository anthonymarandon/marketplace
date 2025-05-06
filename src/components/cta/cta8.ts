import { Component } from '@/types/components';
import CTA8 from './cta.react/cta8';

export const componentCTA8: Component = {
  id: 'cta8',
  name: 'CTA 8',
  description: 'Server Component',
  category: 'cta',
  component: CTA8,
  code: `import { FiMail, FiLock, FiUserPlus, FiDatabase, FiBarChart2 } from 'react-icons/fi';

export default function CTA8() {

  const backgroundImageUrl = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="relative bg-gray-800 p-8 md:p-16 max-w-6xl mx-auto font-sans text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src={backgroundImageUrl} alt="Fond abstrait technologie" className="object-cover w-full h-full opacity-20"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">

            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Prêt à Transformer <br /> Vos Données en <span className="text-cyan-400">Actions</span> ?
                </h1>
                <p className="mt-5 text-gray-300 text-lg">
                    Entrez votre email pour recevoir un accès anticipé à notre nouvelle plateforme d'analyse et débloquer des insights puissants.
                </p>

                 <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-left text-sm">
                    <div className="flex items-center gap-2">
                        <FiDatabase className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                        <span>Centralisation des données</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiBarChart2 className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                        <span>Visualisations claires</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <FiLock className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                        <span>Sécurité de niveau entreprise</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <FiUserPlus className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                         <span>Collaboration facile</span>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center">Accès Anticipé Exclusif</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email-cta8" className="sr-only">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="email" 
                                    id="email-cta8"
                                    required 
                                    placeholder="Votre adresse email professionnelle"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-md bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition duration-200"
                                />
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out shadow hover:shadow-cyan-500/40"
                        >
                            Demander l'Accès
                        </button>
                    </form>
                    <p className="text-xs text-gray-400 mt-4 text-center">Nous respectons votre vie privée. Pas de spam.</p>
                </div>
            </div>

        </div>
    </div>
  );
}
`
}