import Link from 'next/link';

export default function Hero2() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative order-first md:order-last">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="collaboration créative" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left order-last md:order-first">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Innovez {' '}
              <span className="text-blue-600">ensemble</span> pour demain
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Explorez de nouvelles possibilités et façonnez l'avenir avec nos outils collaboratifs conçus pour booster la créativité et la productivité.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/join" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
                Découvrir <span className="ml-2">→</span>
              </Link>
              <Link href="/about" className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
                Nos solutions
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span>Utilisé par les meilleures équipes innovantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 