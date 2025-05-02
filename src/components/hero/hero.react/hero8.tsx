import Link from 'next/link';

export default function Hero8() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sécurité <span className="text-indigo-600">renforcée</span> à chaque étape
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Protégez vos données et celles de vos utilisateurs avec nos mesures de sécurité avancées et conformes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link href="/security" className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
                En savoir plus sur la sécurité <span className="ml-2">→</span>
              </Link>
              <Link href="/compliance" className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
                Conformité
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span>Certifié ISO 27001</span>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop" 
              alt="sécurité informatique"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 