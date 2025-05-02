import { MdSpeed, MdSecurity, MdIntegrationInstructions, MdAutoAwesome, MdInsights, MdSupportAgent } from "react-icons/md";

export default function Features1() {
  return (
    <div id="features">
      <div className="w-full py-16 px-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Fonctionnalités puissantes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez comment notre plateforme peut transformer votre flux de travail grâce à ces fonctionnalités incroyables conçues pour booster votre productivité et simplifier vos tâches quotidiennes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-200 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
              <MdSpeed className="text-black text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Performance ultra-rapide</h3>
            <p className="text-gray-700">Profitez d'une vitesse inégalée grâce à notre architecture optimisée qui fournit des résultats en quelques millisecondes.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <MdSecurity className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Sécurité de niveau entreprise</h3>
            <p className="text-gray-700">Restez serein grâce à un chiffrement avancé et des protocoles de sécurité qui protègent vos données à tout moment.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
              <MdIntegrationInstructions className="text-purple-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Intégrations transparentes</h3>
            <p className="text-gray-700">Connectez-vous à plus de 200 applications et services grâce à notre API robuste et nos modules d'intégration préconçus.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300">
              <MdAutoAwesome className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Automatisation par IA</h3>
            <p className="text-gray-700">Laissez nos algorithmes intelligents gérer les tâches répétitives, libérant ainsi votre temps pour des missions plus importantes.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors duration-300">
              <MdInsights className="text-amber-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Analyses avancées</h3>
            <p className="text-gray-700">Prenez des décisions éclairées grâce à des rapports complets et des visualisations qui révèlent des informations clés.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors duration-300">
              <MdSupportAgent className="text-pink-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Support expert 24/7</h3>
            <p className="text-gray-700">Notre équipe dédiée est disponible à tout moment pour vous aider à résoudre vos problèmes et répondre à vos questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}