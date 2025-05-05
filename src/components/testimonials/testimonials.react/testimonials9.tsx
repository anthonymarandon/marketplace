export default function Testimonials9() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Histoires de Succès Client
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            Découvrez l'impact réel de nos services à travers leurs mots.
          </p>
          <div className="inline-flex items-center justify-center">
              <span className="w-12 h-0.5 bg-blue-300"></span>
              <span className="w-2 h-2 bg-blue-500 rounded-full mx-2"></span>
              <span className="w-12 h-0.5 bg-blue-300"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm p-6 flex flex-col">
            <div className="flex items-center mb-4">
                <img
                    className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                    src="https://i.pravatar.cc/150?img=30"
                    alt="Avatar de Hugo Chevalier"
                    width={56}
                    height={56}
                />
                <div>
                    <p className="text-lg font-semibold text-gray-900">Hugo Chevalier</p>
                    <p className="text-sm text-blue-700">Artisan Local</p>
                </div>
            </div>
            <blockquote className="text-gray-700 italic flex-grow">
                <p>"Je peux maintenant me concentrer sur mon métier, sachant que ma présence en ligne est entre de bonnes mains."
                </p>
            </blockquote>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm p-6 flex flex-col">
            <div className="flex items-center mb-4">
                <img
                    className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                    src="https://i.pravatar.cc/150?img=31"
                    alt="Avatar de Manon Vincent"
                    width={56}
                    height={56}
                />
                <div>
                    <p className="text-lg font-semibold text-gray-900">Manon Vincent</p>
                    <p className="text-sm text-blue-700">Consultante Indépendante</p>
                </div>
            </div>
            <blockquote className="text-gray-700 italic flex-grow">
                <p>"Une solution flexible qui s'adapte parfaitement à l'évolution de mes besoins professionnels."
                </p>
            </blockquote>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm p-6 flex flex-col">
            <div className="flex items-center mb-4">
                <img
                    className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                    src="https://i.pravatar.cc/150?img=32"
                    alt="Avatar de Arthur Roy"
                    width={56}
                    height={56}
                />
                <div>
                    <p className="text-lg font-semibold text-gray-900">Arthur Roy</p>
                    <p className="text-sm text-blue-700">Photographe</p>
                </div>
            </div>
            <blockquote className="text-gray-700 italic flex-grow">
                <p>"Le design est superbe et met vraiment en valeur mon portfolio. Très satisfait du résultat final."
                </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
