export default function Testimonials5() {
  return (
    <section className="bg-emerald-50 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-left md:text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Écoutez les histoires de réussite de ceux qui ont choisi de travailler avec nous.
          </p>
          <div className="w-16 h-1 bg-emerald-500 rounded md:mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:flex md:items-center p-4 md:p-0">
            <div className="md:w-1/3">
                <img
                  className="h-48 w-full object-cover md:h-full"
                  src="https://i.pravatar.cc/300?img=14"
                  alt="Personne souriante"
                  width={300}
                  height={300}
                />
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <blockquote className="text-gray-700 italic text-lg mb-4">
                <p>"Leur expertise technique combinée à une excellente communication a rendu notre projet complexe beaucoup plus simple à gérer."
                </p>
              </blockquote>
              <footer className="mt-4">
                <div className="font-bold text-gray-900">Nathalie Durand</div>
                <div className="text-sm text-emerald-600">CTO, SolutionsAvancees</div>
              </footer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden md:flex md:items-center p-4 md:p-0">
             <div className="md:w-1/3 md:order-2">
                 <img
                  className="h-48 w-full object-cover md:h-full"
                  src="https://i.pravatar.cc/300?img=15"
                  alt="Homme travaillant sur ordinateur"
                  width={300}
                  height={300}
                />
            </div>
            <div className="p-6 md:p-8 md:w-2/3 md:order-1 md:text-right">
              <blockquote className="text-gray-700 italic text-lg mb-4">
                <p>"Un partenaire fiable qui comprend vraiment les enjeux de notre secteur. Les résultats parlent d'eux-mêmes."
                </p>
              </blockquote>
              <footer className="mt-4">
                <div className="font-bold text-gray-900">Olivier Lefebvre</div>
                <div className="text-sm text-emerald-600">Directeur Général, ProConseil</div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
