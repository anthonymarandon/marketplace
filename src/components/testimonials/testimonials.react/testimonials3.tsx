export default function Testimonials3() {
  return (
    <section className="bg-slate-900 text-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Avis Vérifiés de Nos Utilisateurs
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            Des retours authentiques qui témoignent de la qualité de nos services.
          </p>
           <div className="inline-block w-20 h-1 bg-teal-400 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-lg p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              className="w-20 h-20 rounded-lg shadow-md flex-shrink-0"
              src="https://i.pravatar.cc/150?img=7"
              alt="Avatar de Sophie Dubois"
              width={80}
              height={80}
            />
            <div>
              <p className="text-slate-300 italic mb-4 text-base">
                "Une plateforme intuitive et un support client incroyable. J'ai pu lancer mon projet en un temps record grâce à leur aide."
              </p>
              <h3 className="text-lg font-semibold text-white">
                Sophie Dubois
              </h3>
              <p className="text-sm text-teal-400 font-medium">
                Fondatrice, Creative Hub
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              className="w-20 h-20 rounded-lg shadow-md flex-shrink-0"
              src="https://i.pravatar.cc/150?img=8"
              alt="Avatar de Lucas Moreau"
              width={80}
              height={80}
            />
            <div>
              <p className="text-slate-300 italic mb-4 text-base">
                "Les fonctionnalités proposées sont exactement ce dont nous avions besoin. L'intégration a été fluide et sans accroc."
              </p>
              <h3 className="text-lg font-semibold text-white">
                Lucas Moreau
              </h3>
              <p className="text-sm text-teal-400 font-medium">
                Développeur Principal, TechForward
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 md:col-span-2 lg:col-span-1 lg:col-start-2">
            <img
              className="w-20 h-20 rounded-lg shadow-md flex-shrink-0"
              src="https://i.pravatar.cc/150?img=9"
              alt="Avatar de Chloé Petit"
              width={80}
              height={80}
            />
            <div>
              <p className="text-slate-300 italic mb-4 text-base">
                "Service client au top, toujours à l'écoute et prêt à aider. Cela fait toute la différence !"
              </p>
              <h3 className="text-lg font-semibold text-white">
                 Chloé Petit
              </h3>
              <p className="text-sm text-teal-400 font-medium">
                Responsable Clientèle, ServicePlus
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
