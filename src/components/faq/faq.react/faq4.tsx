export default function Faq4() {
  return (
    <div className="bg-indigo-50 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-12">Foire Aux Questions</h2>
        <div className="divide-y divide-indigo-200">
          <details className="group py-6">
            <summary className="font-semibold text-lg sm:text-xl cursor-pointer text-indigo-700 hover:text-indigo-900 flex justify-between items-center list-none">
              Comment créer un compte&nbsp;?
              <svg className="w-5 h-5 text-indigo-500 group-open:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </summary>
            <div className="mt-4 pl-2 pr-2 text-gray-700 bg-indigo-50/50 p-4 rounded-md">
              <p>Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
            </div>
          </details>
          <details className="group py-6">
            <summary className="font-semibold text-lg sm:text-xl cursor-pointer text-indigo-700 hover:text-indigo-900 flex justify-between items-center list-none">
              Quels moyens de paiement acceptez-vous&nbsp;?
              <svg className="w-5 h-5 text-indigo-500 group-open:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </summary>
            <div className="mt-4 pl-2 pr-2 text-gray-700 bg-indigo-50/50 p-4 rounded-md">
              <p>Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
            </div>
          </details>
          <details className="group py-6">
            <summary className="font-semibold text-lg sm:text-xl cursor-pointer text-indigo-700 hover:text-indigo-900 flex justify-between items-center list-none">
              Comment puis-je réinitialiser mon mot de passe&nbsp;?
              <svg className="w-5 h-5 text-indigo-500 group-open:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </summary>
            <div className="mt-4 pl-2 pr-2 text-gray-700 bg-indigo-50/50 p-4 rounded-md">
              <p>Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
            </div>
          </details>
          <details className="group py-6">
            <summary className="font-semibold text-lg sm:text-xl cursor-pointer text-indigo-700 hover:text-indigo-900 flex justify-between items-center list-none">
              Quelle est votre politique de remboursement&nbsp;?
              <svg className="w-5 h-5 text-indigo-500 group-open:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </summary>
            <div className="mt-4 pl-2 pr-2 text-gray-700 bg-indigo-50/50 p-4 rounded-md">
              <p>Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
            </div>
          </details>
          <details className="group py-6">
            <summary className="font-semibold text-lg sm:text-xl cursor-pointer text-indigo-700 hover:text-indigo-900 flex justify-between items-center list-none">
              Puis-je changer ou modifier mon abonnement&nbsp;?
              <svg className="w-5 h-5 text-indigo-500 group-open:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </summary>
            <div className="mt-4 pl-2 pr-2 text-gray-700 bg-indigo-50/50 p-4 rounded-md">
              <p>Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
