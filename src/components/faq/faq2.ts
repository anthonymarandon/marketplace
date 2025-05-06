import { Component } from '@/types/components';
import Faq2 from './faq.react/faq2';

export const componentFaq2: Component = {
  id: 'faq2',
  name: 'FAQ 2',
  description: 'Server Component',
  category: 'faq',
  component: Faq2,
  code: `export default function Faq2() {
  return (
    <div className="bg-blue-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">Foire Aux Questions</h1>
        <div className="space-y-5">
          <details className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <summary className="font-semibold text-xl cursor-pointer text-blue-800 hover:text-blue-600 transition-colors duration-200">Comment créer un compte&nbsp;?</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
          </details>
          <details className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <summary className="font-semibold text-xl cursor-pointer text-blue-800 hover:text-blue-600 transition-colors duration-200">Quels moyens de paiement acceptez-vous&nbsp;?</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
          </details>
          <details className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <summary className="font-semibold text-xl cursor-pointer text-blue-800 hover:text-blue-600 transition-colors duration-200">Comment puis-je réinitialiser mon mot de passe&nbsp;?</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
          </details>
          <details className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <summary className="font-semibold text-xl cursor-pointer text-blue-800 hover:text-blue-600 transition-colors duration-200">Quelle est votre politique de remboursement&nbsp;?</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
          </details>
          <details className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <summary className="font-semibold text-xl cursor-pointer text-blue-800 hover:text-blue-600 transition-colors duration-200">Puis-je changer ou modifier mon abonnement&nbsp;?</summary>
            <p className="mt-3 text-gray-700 leading-relaxed">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
`
}