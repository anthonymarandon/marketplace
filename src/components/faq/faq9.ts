import { Component } from '@/types/components';
import Faq9 from './faq.react/faq9';

export const componentFaq9: Component = {
  id: 'faq9',
  name: 'FAQ 9',
  description: 'Server Component',
  category: 'faq',
  component: Faq9,
  code: `export default function Faq9() {
  return (
    <div className="bg-slate-100 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-10">Foire Aux Questions</h1>
        <div className="space-y-3">
          <details className="group bg-transparent rounded-lg overflow-hidden border border-slate-300">
            <summary className="font-medium text-lg cursor-pointer text-slate-900 bg-slate-200 hover:bg-slate-300/70 p-5 flex justify-between items-center transition-colors duration-200 list-none">
              Comment créer un compte&nbsp;?
              <span className="text-slate-600 transform transition-transform duration-300 group-open:rotate-[45deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 bg-white">
              <p className="text-slate-700 leading-relaxed">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
            </div>
          </details>
          <details className="group bg-transparent rounded-lg overflow-hidden border border-slate-300">
            <summary className="font-medium text-lg cursor-pointer text-slate-900 bg-slate-200 hover:bg-slate-300/70 p-5 flex justify-between items-center transition-colors duration-200 list-none">
              Quels moyens de paiement acceptez-vous&nbsp;?
              <span className="text-slate-600 transform transition-transform duration-300 group-open:rotate-[45deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 bg-white">
              <p className="text-slate-700 leading-relaxed">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
            </div>
          </details>
          <details className="group bg-transparent rounded-lg overflow-hidden border border-slate-300">
            <summary className="font-medium text-lg cursor-pointer text-slate-900 bg-slate-200 hover:bg-slate-300/70 p-5 flex justify-between items-center transition-colors duration-200 list-none">
              Comment puis-je réinitialiser mon mot de passe&nbsp;?
              <span className="text-slate-600 transform transition-transform duration-300 group-open:rotate-[45deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 bg-white">
              <p className="text-slate-700 leading-relaxed">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
            </div>
          </details>
          <details className="group bg-transparent rounded-lg overflow-hidden border border-slate-300">
            <summary className="font-medium text-lg cursor-pointer text-slate-900 bg-slate-200 hover:bg-slate-300/70 p-5 flex justify-between items-center transition-colors duration-200 list-none">
              Quelle est votre politique de remboursement&nbsp;?
              <span className="text-slate-600 transform transition-transform duration-300 group-open:rotate-[45deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 bg-white">
              <p className="text-slate-700 leading-relaxed">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
            </div>
          </details>
          <details className="group bg-transparent rounded-lg overflow-hidden border border-slate-300">
            <summary className="font-medium text-lg cursor-pointer text-slate-900 bg-slate-200 hover:bg-slate-300/70 p-5 flex justify-between items-center transition-colors duration-200 list-none">
              Puis-je changer ou modifier mon abonnement&nbsp;?
              <span className="text-slate-600 transform transition-transform duration-300 group-open:rotate-[45deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 bg-white">
              <p className="text-slate-700 leading-relaxed">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
`
}