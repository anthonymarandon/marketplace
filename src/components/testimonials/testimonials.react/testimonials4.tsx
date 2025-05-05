export default function Testimonials4() {
  return (
    <section className="bg-gradient-to-r from-cyan-50 to-blue-100 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Ce qu'ils Pensent de Nous
          </h2>
           <p className="text-lg text-gray-600 mb-5">
            Des expériences partagées par nos clients satisfaits.
          </p>
          <div className="inline-block w-24 h-1.5 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
             <img
              className="w-24 h-24 rounded-full mb-5 border-4 border-cyan-200"
              src="https://i.pravatar.cc/150?img=10"
              alt="Avatar de Thomas Bernard"
              width={96}
              height={96}
            />
            <blockquote className="text-gray-700 italic mb-5 flex-grow">
              <p>"Une transformation digitale réussie grâce à leur accompagnement sur mesure. Je recommande vivement!"</p>
            </blockquote>
            <footer className="mt-auto">
              <div className="font-semibold text-gray-900">Thomas Bernard</div>
              <div className="text-sm text-cyan-600">Entrepreneur, StartUp Boost</div>
            </footer>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
             <img
              className="w-24 h-24 rounded-full mb-5 border-4 border-cyan-200"
              src="https://i.pravatar.cc/150?img=11"
              alt="Avatar de Léa Roussel"
              width={96}
              height={96}
            />
            <blockquote className="text-gray-700 italic mb-5 flex-grow">
              <p>"Enfin une solution qui comprend nos besoins spécifiques. L'équipe est à l'écoute et très professionnelle."</p>
            </blockquote>
            <footer className="mt-auto">
              <div className="font-semibold text-gray-900">Léa Roussel</div>
              <div className="text-sm text-cyan-600">Marketing Manager, Digital Wave</div>
            </footer>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
             <img
              className="w-24 h-24 rounded-full mb-5 border-4 border-cyan-200"
              src="https://i.pravatar.cc/150?img=12"
              alt="Avatar de Antoine Garcia"
              width={96}
              height={96}
            />
            <blockquote className="text-gray-700 italic mb-5 flex-grow">
              <p>"Des résultats concrets et mesurables rapidement. Leur approche data-driven est très efficace."</p>
            </blockquote>
            <footer className="mt-auto">
              <div className="font-semibold text-gray-900">Antoine Garcia</div>
              <div className="text-sm text-cyan-600">Analyste Financier, InvestPlus</div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
