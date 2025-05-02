import { MdOutlineSettings, MdOutlineBuild, MdOutlineCloud, MdOutlineAnalytics, MdOutlinePalette, MdOutlineSupport } from "react-icons/md";

export default function Features2() {
  return (
    <div id="features" className="bg-gray-50">
      <div className="w-full py-16 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Explorez nos Capacités</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous offrons une suite d'outils conçus pour améliorer votre efficacité et rationaliser vos processus complexes. Voyez comment nous pouvons vous aider.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-blue-300 transition-colors duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MdOutlineSettings className="text-blue-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Configuration Flexible</h3>
              <p className="text-gray-600">Adaptez la plateforme à vos besoins spécifiques grâce à des options de configuration étendues et intuitives.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-green-300 transition-colors duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <MdOutlineBuild className="text-green-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Outils de Développement</h3>
              <p className="text-gray-600">Accélérez votre cycle de développement avec nos outils intégrés et notre API complète.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-purple-300 transition-colors duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <MdOutlineCloud className="text-purple-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Infrastructure Cloud</h3>
              <p className="text-gray-600">Bénéficiez d'une infrastructure cloud fiable, évolutive et sécurisée pour héberger vos applications.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-amber-300 transition-colors duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <MdOutlineAnalytics className="text-amber-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Visualisation de Données</h3>
              <p className="text-gray-600">Transformez vos données brutes en informations exploitables grâce à des tableaux de bord interactifs.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-teal-300 transition-colors duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <MdOutlinePalette className="text-teal-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personnalisation Visuelle</h3>
              <p className="text-gray-600">Créez une expérience utilisateur unique avec nos options de personnalisation de l'interface.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-md border border-transparent hover:border-red-300 transition-colors duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <MdOutlineSupport className="text-red-600 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Assistance Dédiée</h3>
              <p className="text-gray-600">Accédez à notre équipe d'experts pour une assistance rapide et efficace quand vous en avez besoin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
