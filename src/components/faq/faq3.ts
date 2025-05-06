import { Component } from '@/types/components';
import Faq3 from './faq.react/faq3';

export const componentFaq3: Component = {
  id: 'faq3',
  name: 'FAQ 3',
  description: 'Server Component',
  category: 'faq',
  component: Faq3,
  code: `export default function Faq3() {
  return (
    <div className="bg-green-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">Foire Aux Questions</h1>
        <div className="space-y-4">
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Comment créer un compte&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Quels moyens de paiement acceptez-vous&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Comment puis-je réinitialiser mon mot de passe&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Quelle est votre politique de remboursement&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
          </details>
          <details className="group bg-white p-6 rounded-lg border border-green-200 hover:border-green-400 transition-all duration-300">
            <summary className="font-medium text-lg cursor-pointer text-green-800 group-hover:text-green-600 flex justify-between items-center">
              <span>Puis-je changer ou modifier mon abonnement&nbsp;?</span>
              <span className="transform transition-transform duration-300 group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed pt-2 border-t border-green-100 group-open:border-t-0">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
`
}