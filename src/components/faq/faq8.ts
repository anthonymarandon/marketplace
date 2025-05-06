import { Component } from '@/types/components';
import Faq8 from './faq.react/faq8';

export const componentFaq8: Component = {
  id: 'faq8',
  name: 'FAQ 8',
  description: 'Server Component',
  category: 'faq',
  component: Faq8,
  code: `export default function Faq8() {
  return (
    <div className="bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-sky-700 mb-12">Foire Aux Questions</h1>
        <div className="space-y-6">
          <details className="group bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <summary className="font-semibold text-lg cursor-pointer text-sky-800 hover:text-sky-600 flex justify-between items-center">
              Comment créer un compte&nbsp;?
              <svg className="w-6 h-6 text-sky-500 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
          </details>
          <details className="group bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <summary className="font-semibold text-lg cursor-pointer text-sky-800 hover:text-sky-600 flex justify-between items-center">
              Quels moyens de paiement acceptez-vous&nbsp;?
              <svg className="w-6 h-6 text-sky-500 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
          </details>
          <details className="group bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <summary className="font-semibold text-lg cursor-pointer text-sky-800 hover:text-sky-600 flex justify-between items-center">
              Comment puis-je réinitialiser mon mot de passe&nbsp;?
              <svg className="w-6 h-6 text-sky-500 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
          </details>
          <details className="group bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <summary className="font-semibold text-lg cursor-pointer text-sky-800 hover:text-sky-600 flex justify-between items-center">
              Quelle est votre politique de remboursement&nbsp;?
              <svg className="w-6 h-6 text-sky-500 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
          </details>
          <details className="group bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <summary className="font-semibold text-lg cursor-pointer text-sky-800 hover:text-sky-600 flex justify-between items-center">
              Puis-je changer ou modifier mon abonnement&nbsp;?
              <svg className="w-6 h-6 text-sky-500 transform transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
`
}