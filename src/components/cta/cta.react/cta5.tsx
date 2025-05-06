import { FaStar, FaQuoteLeft, FaBuilding, FaChartPie } from 'react-icons/fa';
import { FiArrowUpRight, FiMessageSquare } from 'react-icons/fi';

export default function CTA5() {
  const logo1 = 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg'; 
  const logo2 = 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'; 
  const logo3 = 'https://cdn.worldvectorlogo.com/logos/airbnb.svg'; 
  const logo4 = 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg'; 

  const testimonialAvatar = 'https://i.pravatar.cc/150?img=8';

  return (
    <div className="bg-white p-8 md:p-16 max-w-7xl mx-auto font-sans border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Rejoignez les Entreprises <br />
            <span className="text-indigo-600">Qui Nous Font Confiance</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Des startups aux grands groupes, découvrez pourquoi tant d'entreprises choisissent notre solution pour accélérer leur croissance et optimiser leurs opérations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow hover:shadow-md">
              Voir les Études de Cas <FiArrowUpRight />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 ease-in-out">
              Parler à un Expert <FiMessageSquare />
            </button>
          </div>

          <div className="mt-12">
                <p className="text-sm text-gray-500 mb-4 text-center lg:text-left">Utilisé par des équipes performantes chez :</p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 grayscale opacity-75">
                    <img src={logo1} alt="Logo Client 1" className="h-6" />
                    <img src={logo2} alt="Logo Client 2" className="h-6" />
                    <img src={logo3} alt="Logo Client 3" className="h-6" />
                    <img src={logo4} alt="Logo Client 4" className="h-8" />
                </div>
            </div>
        </div>

        <div className="space-y-8">
             <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-xl shadow-sm border border-indigo-100">
                <FaQuoteLeft className="text-indigo-300 text-3xl mb-4" />
                <p className="text-gray-700 italic mb-4">"Leur plateforme a transformé notre manière de travailler. Les résultats sont incroyables et le support est toujours là quand on en a besoin."</p>
                <div className="flex items-center gap-3">
                    <img src={testimonialAvatar} alt="Avatar Témoignage" className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200" />
                    <div>
                        <p className="font-semibold text-gray-800">Claire Dubois</p>
                        <p className="text-sm text-gray-500">Directrice Marketing, Tech Innovate</p>
                    </div>
                </div>
                 <div className="flex mt-3 text-yellow-500">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-3">
                    <FaBuilding className="text-indigo-500 text-2xl"/>
                    <div>
                        <p className="font-semibold text-gray-800">+1500</p>
                        <p className="text-xs text-gray-500">Entreprises Clientes</p>
                    </div>
                </div>
                 <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-3">
                    <FaChartPie className="text-green-500 text-2xl"/>
                     <div>
                        <p className="font-semibold text-gray-800">+40%</p>
                        <p className="text-xs text-gray-500">Efficacité Améliorée</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
