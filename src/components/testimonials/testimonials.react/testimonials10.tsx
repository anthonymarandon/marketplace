export default function Testimonials10() {
  return (
    <section className="bg-gray-900 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ce Que l'Industrie En Pense
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Des leaders d'opinion et des professionnels partagent leur expérience.
          </p>
          <div className="inline-block w-20 h-1 bg-amber-400 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 transform transition duration-300 hover:bg-gray-700 hover:shadow-xl">
            <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-amber-400 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <blockquote className="text-lg text-gray-300 italic mb-3">
                        <p>"Une solution robuste qui a standardisé nos opérations et amélioré notre efficacité globale."
                        </p>
                    </blockquote>
                    <footer className="text-base">
                        <span className="font-medium text-white">Alexandre Petit</span> -
                        <span className="text-gray-400"> Directeur des Opérations, Global Corp</span>
                    </footer>
                </div>
            </div>
          </div>

           <div className="bg-gray-800 rounded-lg p-6 transform transition duration-300 hover:bg-gray-700 hover:shadow-xl">
            <div className="flex items-start mb-4">
                 <svg className="w-8 h-8 text-amber-400 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10.5a17.687 17.687 0 012.862 2.862c1.5 2 2.862 2.657 2.862 2.657zm4.343-4.343a8 8 0 11-11.314 0 8 8 0 0111.314 0z" />
                </svg>
                <div>
                    <blockquote className="text-lg text-gray-300 italic mb-3">
                        <p>"L'innovation est au cœur de leur approche. Ils nous ont aidés à rester compétitifs sur un marché en évolution."
                        </p>
                    </blockquote>
                    <footer className="text-base">
                        <span className="font-medium text-white">Laura Martin</span> -
                        <span className="text-gray-400"> Stratège Innovation, FutureWorks</span>
                    </footer>
                </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 transform transition duration-300 hover:bg-gray-700 hover:shadow-xl md:col-span-2">
            <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-amber-400 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                    <blockquote className="text-lg text-gray-300 italic mb-3">
                        <p>"Un partenariat précieux. Leur support proactif et leurs conseils stratégiques ont été déterminants pour notre succès."
                        </p>
                    </blockquote>
                    <footer className="text-base">
                        <span className="font-medium text-white">Quentin Moreau</span> -
                        <span className="text-gray-400"> Analyste Senior, Insight Partners</span>
                    </footer>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
