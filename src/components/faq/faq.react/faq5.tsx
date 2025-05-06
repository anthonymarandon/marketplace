export default function Faq5() {
  return (
    <div className="bg-gray-900 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-teal-400 mb-12">Foire Aux Questions</h1>
        <div className="space-y-4">
          <details className="bg-gray-800 p-6 rounded-lg shadow-2xl group">
            <summary className="font-semibold text-lg cursor-pointer text-gray-100 hover:text-teal-300 transition-colors duration-200 flex justify-between items-center">
              Comment créer un compte&nbsp;?
              <span className="text-teal-400 group-open:hidden">+</span>
              <span className="text-teal-400 hidden group-open:inline">-</span>
            </summary>
            <p className="mt-4 text-gray-300 leading-relaxed">Pour créer un compte, cliquez sur «&nbsp;S'inscrire&nbsp;» et suivez les instructions pour renseigner vos informations personnelles.</p>
          </details>
          <details className="bg-gray-800 p-6 rounded-lg shadow-2xl group">
            <summary className="font-semibold text-lg cursor-pointer text-gray-100 hover:text-teal-300 transition-colors duration-200 flex justify-between items-center">
              Quels moyens de paiement acceptez-vous&nbsp;?
              <span className="text-teal-400 group-open:hidden">+</span>
              <span className="text-teal-400 hidden group-open:inline">-</span>
            </summary>
            <p className="mt-4 text-gray-300 leading-relaxed">Nous acceptons les principales cartes de crédit, PayPal et d'autres méthodes selon votre région.</p>
          </details>
          <details className="bg-gray-800 p-6 rounded-lg shadow-2xl group">
            <summary className="font-semibold text-lg cursor-pointer text-gray-100 hover:text-teal-300 transition-colors duration-200 flex justify-between items-center">
              Comment puis-je réinitialiser mon mot de passe&nbsp;?
              <span className="text-teal-400 group-open:hidden">+</span>
              <span className="text-teal-400 hidden group-open:inline">-</span>
            </summary>
            <p className="mt-4 text-gray-300 leading-relaxed">Cliquez sur «&nbsp;Mot de passe oublié&nbsp;» sur la page de connexion et suivez les instructions pour réinitialiser votre mot de passe.</p>
          </details>
          <details className="bg-gray-800 p-6 rounded-lg shadow-2xl group">
            <summary className="font-semibold text-lg cursor-pointer text-gray-100 hover:text-teal-300 transition-colors duration-200 flex justify-between items-center">
              Quelle est votre politique de remboursement&nbsp;?
              <span className="text-teal-400 group-open:hidden">+</span>
              <span className="text-teal-400 hidden group-open:inline">-</span>
            </summary>
            <p className="mt-4 text-gray-300 leading-relaxed">Notre politique de remboursement permet un retour sous 30 jours après l'achat, sous certaines conditions. Veuillez consulter notre page dédiée pour plus de détails.</p>
          </details>
          <details className="bg-gray-800 p-6 rounded-lg shadow-2xl group">
            <summary className="font-semibold text-lg cursor-pointer text-gray-100 hover:text-teal-300 transition-colors duration-200 flex justify-between items-center">
              Puis-je changer ou modifier mon abonnement&nbsp;?
              <span className="text-teal-400 group-open:hidden">+</span>
              <span className="text-teal-400 hidden group-open:inline">-</span>
            </summary>
            <p className="mt-4 text-gray-300 leading-relaxed">Oui, vous pouvez à tout moment passer à une formule supérieure ou inférieure depuis votre espace client.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
