import { Component } from '@/types/components';
import Faq1 from './faq.react/faq1';

export const componentFaq1: Component = {
  id: 'faq1',
  name: 'FAQ 1',
  description: 'Server Component',
  category: 'faq',
  component: Faq1,
  code: `export default function Faq1() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Foire Aux Questions</h1>
        <div className="space-y-4">
          <details className="bg-white p-6 rounded-lg shadow-md">
            <summary className="font-semibold text-lg cursor-pointer text-gray-700 hover:text-purple-600">Comment créer un compte&nbsp;?</summary>
            <p className="mt-2 text-gray-600">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-md">
            <summary className="font-semibold text-lg cursor-pointer text-gray-700 hover:text-purple-600">Quels moyens de paiement acceptez-vous&nbsp;?</summary>
            <p className="mt-2 text-gray-600">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-md">
            <summary className="font-semibold text-lg cursor-pointer text-gray-700 hover:text-purple-600">Comment puis-je réinitialiser mon mot de passe&nbsp;?</summary>
            <p className="mt-2 text-gray-600">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-md">
            <summary className="font-semibold text-lg cursor-pointer text-gray-700 hover:text-purple-600">Quelle est votre politique de remboursement&nbsp;?</summary>
            <p className="mt-2 text-gray-600">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-md">
            <summary className="font-semibold text-lg cursor-pointer text-gray-700 hover:text-purple-600">Puis-je changer ou modifier mon abonnement&nbsp;?</summary>
            <p className="mt-2 text-gray-600">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
          </details>
        </div>
      </div>
    </div>
  );
}`
}