import { Component } from '@/types/components';
import Faq7 from './faq.react/faq7';

export const componentFaq7: Component = {
  id: 'faq7',
  name: 'FAQ 7',
  description: 'Server Component',
  category: 'faq',
  component: Faq7,
  code: `export default function Faq7() {
  return (
    <div className="bg-amber-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-semibold text-center text-amber-700 mb-10">Foire Aux Questions</h1>
        <div className="space-y-4">
          <details className="group bg-white p-0 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <summary className="font-medium text-lg cursor-pointer text-amber-800 hover:bg-amber-100/50 p-5 flex justify-between items-center list-none">
              Comment créer un compte&nbsp;?
              <span className="text-amber-600 transition-transform duration-300 transform group-open:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 border-l-4 border-amber-500 bg-amber-50/30">
              <p className="text-gray-700 leading-relaxed">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
            </div>
          </details>
          <details className="group bg-white p-0 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <summary className="font-medium text-lg cursor-pointer text-amber-800 hover:bg-amber-100/50 p-5 flex justify-between items-center list-none">
              Quels moyens de paiement acceptez-vous&nbsp;?
              <span className="text-amber-600 transition-transform duration-300 transform group-open:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 border-l-4 border-amber-500 bg-amber-50/30">
              <p className="text-gray-700 leading-relaxed">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
            </div>
          </details>
          <details className="group bg-white p-0 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <summary className="font-medium text-lg cursor-pointer text-amber-800 hover:bg-amber-100/50 p-5 flex justify-between items-center list-none">
              Comment puis-je réinitialiser mon mot de passe&nbsp;?
              <span className="text-amber-600 transition-transform duration-300 transform group-open:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 border-l-4 border-amber-500 bg-amber-50/30">
              <p className="text-gray-700 leading-relaxed">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
            </div>
          </details>
          <details className="group bg-white p-0 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <summary className="font-medium text-lg cursor-pointer text-amber-800 hover:bg-amber-100/50 p-5 flex justify-between items-center list-none">
              Quelle est votre politique de remboursement&nbsp;?
              <span className="text-amber-600 transition-transform duration-300 transform group-open:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 border-l-4 border-amber-500 bg-amber-50/30">
              <p className="text-gray-700 leading-relaxed">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
            </div>
          </details>
          <details className="group bg-white p-0 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <summary className="font-medium text-lg cursor-pointer text-amber-800 hover:bg-amber-100/50 p-5 flex justify-between items-center list-none">
              Puis-je changer ou modifier mon abonnement&nbsp;?
              <span className="text-amber-600 transition-transform duration-300 transform group-open:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              </span>
            </summary>
            <div className="p-5 border-l-4 border-amber-500 bg-amber-50/30">
              <p className="text-gray-700 leading-relaxed">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
`
}