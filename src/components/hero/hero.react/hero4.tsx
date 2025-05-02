import Link from 'next/link';

export default function Hero4() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-gray-900 text-white"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
              alt="plateforme analytique" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl" 
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Analysez vos <span className="text-orange-500">données</span> 
              avec précision
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8"> 
              Obtenez des insights clairs et actionnables grâce à notre plateforme d'analyse puissante et intuitive.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/analytics" className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap"> {/* Changed color */}
                Explorer l'analyse <span className="ml-2">→</span>
              </Link>
              <Link href="/demo" className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-300 ease-in-out whitespace-nowrap"> {/* Adjusted secondary button for dark bg */}
                Demander une démo
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-400"> 
              <span>Approuvé par les data scientists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 