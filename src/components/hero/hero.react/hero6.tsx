import Link from 'next/link';

export default function Hero6() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative order-first md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
              alt="design et créativité"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left order-last md:order-last">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Designez avec <span className="text-pink-600">passion</span> et précision
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Donnez vie à vos visions esthétiques avec des outils de design flexibles et puissants.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/design" className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-pink-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
                Créer <span className="ml-2">→</span>
              </Link>
              <Link href="/portfolio" className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
                Voir Portfolio
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span>Adoré par les designers du monde entier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 