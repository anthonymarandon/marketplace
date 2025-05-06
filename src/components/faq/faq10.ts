import { Component } from '@/types/components';
import Faq10 from './faq.react/faq10';

export const componentFaq10: Component = {
  id: 'faq10',
  name: 'FAQ 10',
  description: 'Server Component',
  category: 'faq',
  component: Faq10,
  code: `export default function Faq10() {
  return (
    <div className="bg-fuchsia-700 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-black text-center text-white mb-16 tracking-tighter">F.A.Q</h1>
        <div className="space-y-5">
          <details className="group bg-fuchsia-600 p-1 rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
            <summary className="font-bold text-xl cursor-pointer text-white hover:text-fuchsia-200 p-5 flex justify-between items-center list-none">
              Comment créer un compte&nbsp;?
              <span className="transform transition-transform duration-500 ease-out group-open:rotate-[135deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="p-5 bg-fuchsia-100 text-fuchsia-900 rounded-b-md">
              <p className="leading-relaxed font-medium">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
            </div>
          </details>
          <details className="group bg-fuchsia-600 p-1 rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
            <summary className="font-bold text-xl cursor-pointer text-white hover:text-fuchsia-200 p-5 flex justify-between items-center list-none">
              Quels moyens de paiement acceptez-vous&nbsp;?
              <span className="transform transition-transform duration-500 ease-out group-open:rotate-[135deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="p-5 bg-fuchsia-100 text-fuchsia-900 rounded-b-md">
              <p className="leading-relaxed font-medium">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
            </div>
          </details>
          <details className="group bg-fuchsia-600 p-1 rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
            <summary className="font-bold text-xl cursor-pointer text-white hover:text-fuchsia-200 p-5 flex justify-between items-center list-none">
              Comment puis-je réinitialiser mon mot de passe&nbsp;?
              <span className="transform transition-transform duration-500 ease-out group-open:rotate-[135deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="p-5 bg-fuchsia-100 text-fuchsia-900 rounded-b-md">
              <p className="leading-relaxed font-medium">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
            </div>
          </details>
          <details className="group bg-fuchsia-600 p-1 rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
            <summary className="font-bold text-xl cursor-pointer text-white hover:text-fuchsia-200 p-5 flex justify-between items-center list-none">
              Quelle est votre politique de remboursement&nbsp;?
              <span className="transform transition-transform duration-500 ease-out group-open:rotate-[135deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="p-5 bg-fuchsia-100 text-fuchsia-900 rounded-b-md">
              <p className="leading-relaxed font-medium">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
            </div>
          </details>
          <details className="group bg-fuchsia-600 p-1 rounded-lg shadow-lg hover:shadow-fuchsia-400/50 transition-shadow duration-300">
            <summary className="font-bold text-xl cursor-pointer text-white hover:text-fuchsia-200 p-5 flex justify-between items-center list-none">
              Puis-je changer ou modifier mon abonnement&nbsp;?
              <span className="transform transition-transform duration-500 ease-out group-open:rotate-[135deg]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="p-5 bg-fuchsia-100 text-fuchsia-900 rounded-b-md">
              <p className="leading-relaxed font-medium">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
`
}