export default function Testimonials8() {
  return (
    <section className="bg-purple-700 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nos Clients Prennent la Parole
          </h2>
          <p className="text-lg text-purple-200 mb-6">
            Des retours directs qui illustrent l'impact de notre travail.
          </p>
           <div className="inline-block w-16 h-1 bg-white rounded opacity-75"></div>
        </div>

        <div className="max-w-xl mx-auto space-y-10">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <img
              className="w-24 h-24 rounded-full mb-5 mx-auto border-4 border-purple-200 shadow-md"
              src="https://i.pravatar.cc/150?img=25"
              alt="Avatar de Florence Meyer"
              width={96}
              height={96}
            />
             <p className="text-xl text-gray-700 italic mb-5">
                "Une collaboration exemplaire ! Ils ont su traduire notre vision en une réalité fonctionnelle et esthétique."
             </p>
             <div>
              <span className="font-semibold text-gray-900">Florence Meyer</span>
              <span className="text-purple-600"> / CEO, Visionary Co.</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <img
              className="w-24 h-24 rounded-full mb-5 mx-auto border-4 border-purple-200 shadow-md"
              src="https://i.pravatar.cc/150?img=26"
              alt="Avatar de David Lefevre"
              width={96}
              height={96}
            />
             <p className="text-xl text-gray-700 italic mb-5">
                "Leur plateforme nous a permis d'augmenter notre productivité de manière significative. Simple, efficace."
             </p>
             <div>
              <span className="font-semibold text-gray-900">David Lefevre</span>
              <span className="text-purple-600"> / Manager Opérationnel, Boost Inc.</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <img
              className="w-24 h-24 rounded-full mb-5 mx-auto border-4 border-purple-200 shadow-md"
              src="https://i.pravatar.cc/150?img=27"
              alt="Avatar de Amelie Dubois"
              width={96}
              height={96}
            />
             <p className="text-xl text-gray-700 italic mb-5">
                "Je suis impressionnée par la qualité du service après-vente. Toujours là pour aider."
             </p>
             <div>
              <span className="font-semibold text-gray-900">Amelie Dubois</span>
              <span className="text-purple-600"> / Responsable Marketing, MarketFlow</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
