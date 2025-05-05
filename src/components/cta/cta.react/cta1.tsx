    import { FaApple, FaWindows, FaGoogle, FaAmazon, FaSpotify, FaHeadset, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
    import { IoIosCheckmarkCircle } from "react-icons/io";


    export default function CTA1() {
    const mainImageUrl = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'; 
    const avatar1Url = 'https://i.pravatar.cc/150?img=1';
    const avatar2Url = 'https://i.pravatar.cc/150?img=2';
    const avatar3Url = 'https://i.pravatar.cc/150?img=3';


    return (
        <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-violet-100 p-8 md:p-16 rounded-3xl max-w-7xl mx-auto shadow-lg font-sans">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

            <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transformez Votre <br />
                <span className="text-violet-600">Expérience Digitale</span> <br />
                Aujourd'hui
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
                Rejoignez des milliers de clients satisfaits qui ont élevé leur présence en ligne avec nos solutions de pointe. Commencez votre parcours maintenant et constatez la différence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition duration-300 ease-in-out shadow hover:shadow-md">
                Commencer <FaArrowRight />
                </button>
                <button className="bg-white border border-violet-300 hover:bg-violet-50 text-violet-600 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-sm hover:shadow">
                En Savoir Plus
                </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-3">
                <img src={avatar1Url} alt="Client 1" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src={avatar2Url} alt="Client 2" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <img src={avatar3Url} alt="Client 3" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                </div>
                <span className="bg-violet-200 text-violet-800 text-xs font-bold px-3 py-1 rounded-full">
                +2k
                </span>
                <p className="text-gray-500 text-sm">
                Fait confiance par plus de 2 000+ clients dans le monde
                </p>
            </div>
            </div>

            <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <img
                src={mainImageUrl}
                alt="Deux hommes travaillant sur des ordinateurs portables dans un bureau"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ aspectRatio: '4/3' }} 
            />

            <div className="absolute -top-6 -left-8 md:top-8 md:-left-12 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 transform transition duration-300 hover:scale-105">
                <IoIosCheckmarkCircle className="text-violet-500 text-3xl" />
                <div>
                <p className="font-semibold text-gray-800">Solution de Confiance</p>
                <p className="text-xs text-gray-500">Certifié ISO 27001</p>
                </div>
            </div>

            <div className="absolute -bottom-12 -left-8 md:bottom-16 md:-left-12 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 transform transition duration-300 hover:scale-105">
                <FaHeadset className="text-violet-500 text-3xl" />
                <div>
                <p className="font-semibold text-gray-800">Support 24/7</p>
                <p className="text-xs text-gray-500">Toujours disponible pour vous</p>
                </div>
            </div>

            <button className="absolute bottom-4 right-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition duration-300 ease-in-out shadow hover:shadow-md text-sm">
                Regarder la Démo <FaPlayCircle />
            </button>
            </div>
        </div>

        <div className="mt-20 pt-8 border-t border-violet-200">
            <p className="text-center text-gray-500 text-sm mb-6">
                Fait confiance par les leaders de l'industrie:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                <FaApple className="text-3xl hover:text-gray-600 transition duration-300"/>
                <FaWindows className="text-3xl hover:text-gray-600 transition duration-300"/>
                <FaGoogle className="text-3xl hover:text-gray-600 transition duration-300"/>
                <FaAmazon className="text-3xl hover:text-gray-600 transition duration-300"/>
                <FaSpotify className="text-3xl hover:text-gray-600 transition duration-300"/>
            </div>
        </div>
        </div>
    );
    }
