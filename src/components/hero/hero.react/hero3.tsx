import Link from 'next/link';

export default function Hero3() {
  return (
    <section id='hero' className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-teal-50 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pt-8">
            Lancez votre projet <span className="text-green-600">rapidement</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Passez de l'idée au lancement en un temps record grâce à nos outils optimisés pour la vitesse et l'efficacité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start" className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap"> {/* Changed color */}
              Démarrer maintenant <span className="ml-2">→</span>
            </Link>
            <Link href="/features" className="bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
              Voir les fonctionnalités
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <span>+100 modèles prêts à l'emploi</span>
          </div>
        </div>
      </div>
    </section>
  );
} 